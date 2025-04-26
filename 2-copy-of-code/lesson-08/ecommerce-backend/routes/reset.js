import express from 'express';
import { sequelize } from '../models/index.js';
import { Product } from '../models/Product.js';
import { DeliveryOption } from '../models/DeliveryOption.js';
import { CartItem } from '../models/CartItem.js';
import { Order } from '../models/Order.js';
import { defaultProducts } from '../defaultData/defaultProducts.js';
import { defaultDeliveryOptions } from '../defaultData/defaultDeliveryOptions.js';
import { defaultCart } from '../defaultData/defaultCart.js';
import { defaultOrders } from '../defaultData/defaultOrders.js';

const router = express.Router();

router.post('/', async (req, res) => {
  await sequelize.sync({ force: true });

  await Product.bulkCreate(defaultProducts);
  await DeliveryOption.bulkCreate(defaultDeliveryOptions);
  await CartItem.bulkCreate(defaultCart);
  await Order.bulkCreate(defaultOrders);

  res.status(204).send();
});

export default router;
