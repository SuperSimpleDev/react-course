import express from 'express';
import { Product } from '../models/Product.js';
import fuzzysort from 'fuzzysort';

const router = express.Router();

router.get('/', async (req, res) => {
  const search = req.query.search;

  let products;
  if (search) {
    products = await Product.findAll();

    // Create a new array of products with
    // the keywords joined so it can be
    // fuzzy searched.
    const searchProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      keywords: product.keywords.join(', ')
    }));

    const results = fuzzysort.go(search, searchProducts, {
      keys: ['name', 'keywords'],
      threshold: -500,
      all: true
    });

    const matchedProducts = results.map(result => {
      return products.find(product => {
        return product.id === result.obj.id;
      });
    });

    products = matchedProducts;

  } else {
    products = await Product.findAll();
  }

  res.json(products);
});

export default router;