import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import axios from 'axios';
import { OrdersPage } from './OrdersPage';

vi.mock('axios');

describe('OrdersPage component', () => {
  let cart;
  let orders;

  beforeEach(() => {
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];

    orders = [{
      id: "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
      orderTimeMs: 1723456800000,
      totalCostCents: 3506,
      products: [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        estimatedDeliveryTimeMs: 1723716000000,
        product: {
          id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          image: "images/products/athletic-cotton-socks-6-pairs.jpg",
          name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
          rating: {
            stars: 4.5,
            count: 87
          },
          priceCents: 1090
        }
      }, {
        productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity: 2,
        estimatedDeliveryTimeMs: 1723456800000,
        product: {
          id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
          image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
          name: "Adults Plain Cotton T-Shirt - 2 Pack",
          rating: {
            stars: 4.5,
            count: 56
          },
          priceCents: 799
        }
      }]
    }, {
      id: "b6b6c212-d30e-4d4a-805d-90b52ce6b37d",
      orderTimeMs: 1718013600000,
      totalCostCents: 4190,
      products: [{
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 2,
        estimatedDeliveryTimeMs: 1718618400000,
        product: {
          id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          image: "images/products/intermediate-composite-basketball.jpg",
          name: "Intermediate Size Basketball",
          rating: {
            stars: 4,
            count: 127
          },
          priceCents: 2095
        }
      }]
    }];

    axios.get.mockImplementation(async (urlPath) => {
      if (urlPath === '/api/orders?expand=products') {
        return { data: orders };
      }
    });
  });

  it('renders order details correctly', async () => {
    render(
      <MemoryRouter>
        <OrdersPage cart={cart} />
      </MemoryRouter>
    );

    expect(screen.getByText('Your Orders')).toBeInTheDocument();

    const orderContainers = await screen.findAllByTestId('order-container');
    expect(orderContainers.length).toBe(2);

    // Check the details of the first order.
    expect(
      within(orderContainers[0]).getByTestId('order-date')
    ).toHaveTextContent('August 12');
    expect(
      within(orderContainers[0]).getByTestId('order-total')
    ).toHaveTextContent('$35.06');
    expect(
      within(orderContainers[0]).getByTestId('order-id')
    ).toHaveTextContent('27cba69d-4c3d-4098-b42d-ac7fa62b7664');

    let orderProducts = within(orderContainers[0])
      .getAllByTestId('order-product-details');
    expect(orderProducts.length).toBe(2);
    expect(
      within(orderProducts[0])
        .getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
    ).toBeInTheDocument();
    expect(
      within(orderProducts[1])
        .getByText('Adults Plain Cotton T-Shirt - 2 Pack')
    ).toBeInTheDocument();

    // Check the details of the second order.
    expect(
      within(orderContainers[1]).getByTestId('order-date')
    ).toHaveTextContent('June 10');
    expect(
      within(orderContainers[1]).getByTestId('order-total')
    ).toHaveTextContent('$41.90');
    expect(
      within(orderContainers[1]).getByTestId('order-id')
    ).toHaveTextContent('b6b6c212-d30e-4d4a-805d-90b52ce6b37d');

    orderProducts = within(orderContainers[1])
      .getAllByTestId('order-product-details');
    expect(orderProducts.length).toBe(1);
    expect(
      within(orderProducts[0])
        .getByText('Intermediate Size Basketball')
    ).toBeInTheDocument();
  });
});