import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { DeliveryOptions } from './DeliveryOptions';

vi.mock('axios');

describe('DeliveryOptions component', () => {
  let cartItem;
  let deliveryOptions;
  let loadCart;
  let user;

  beforeEach(() => {
    cartItem = {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '2',
    };

    deliveryOptions = [{
      id: '1',
      deliveryDays: 7,
      priceCents: 0,
      estimatedDeliveryTimeMs: 1747597994451,
    }, {
      id: '2',
      deliveryDays: 3,
      priceCents: 499,
      estimatedDeliveryTimeMs: 1747252394451,
    }, {
      id: '3',
      deliveryDays: 1,
      priceCents: 999,
      estimatedDeliveryTimeMs: 1747079594451,
    }];

    loadCart = vi.fn();
    user = userEvent.setup();
  });

  it('renders delivery options correctly', () => {
    render(
      <DeliveryOptions
        cartItem={cartItem}
        deliveryOptions={deliveryOptions}
        loadCart={loadCart}
      />
    );

    expect(screen.getByText('Choose a delivery option:')).toBeInTheDocument();

    const deliveryOptionElems = screen.getAllByTestId('delivery-option');
    expect(deliveryOptionElems.length).toBe(3);

    expect(deliveryOptionElems[0]).toHaveTextContent('Sunday, May 18');
    expect(deliveryOptionElems[0]).toHaveTextContent('FREE Shipping');
    expect(
      within(deliveryOptionElems[0]).getByTestId('delivery-option-input').checked
    ).toBe(false);

    expect(deliveryOptionElems[1]).toHaveTextContent('Wednesday, May 14');
    expect(deliveryOptionElems[1]).toHaveTextContent('$4.99 - Shipping');
    expect(
      within(deliveryOptionElems[1]).getByTestId('delivery-option-input').checked
    ).toBe(true);

    expect(deliveryOptionElems[2]).toHaveTextContent('Monday, May 12');
    expect(deliveryOptionElems[2]).toHaveTextContent('$9.99 - Shipping');
    expect(
      within(deliveryOptionElems[2]).getByTestId('delivery-option-input').checked
    ).toBe(false);
  });

  it('updates the delivery option', async () => {
    render(
      <DeliveryOptions
        cartItem={cartItem}
        deliveryOptions={deliveryOptions}
        loadCart={loadCart}
      />
    );

    const deliveryOptionElems = screen.getAllByTestId('delivery-option');

    await user.click(deliveryOptionElems[2]);
    expect(axios.put).toHaveBeenCalledWith(
      '/api/cart-items/e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      { deliveryOptionId: '3' }
    );
    expect(loadCart).toHaveBeenCalledTimes(1);

    await user.click(deliveryOptionElems[0]);
    expect(axios.put).toHaveBeenCalledWith(
      '/api/cart-items/e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      { deliveryOptionId: '1' }
    );
    expect(loadCart).toHaveBeenCalledTimes(2);
  });
});