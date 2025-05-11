import { it, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Header } from './Header';

describe('Header component', () => {
  let cart;

  beforeEach(() => {
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 3,
      deliveryOptionId: '2'
    }];
  });

  it('displays the header correctly', () => {
    render(
      <MemoryRouter>
        <Header cart={cart} />
      </MemoryRouter>
    );

    const logo = screen.getByTestId('header-logo');
    expect(logo).toHaveAttribute('src', 'images/logo-white.png');

    const mobileLogo = screen.getByTestId('header-mobile-logo');
    expect(mobileLogo).toHaveAttribute('src', 'images/mobile-logo-white.png');

    expect(screen.getByTestId('header-search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('header-search-button')).toBeInTheDocument();

    const ordersLink = screen.getByTestId('header-orders-link');
    expect(ordersLink).toHaveTextContent('Orders');
    expect(ordersLink).toHaveAttribute('href', '/orders');

    const cartLink = screen.getByTestId('header-cart-link');
    expect(cartLink).toHaveTextContent('Cart');
    expect(cartLink).toHaveTextContent('5');
    expect(cartLink).toHaveAttribute('href', '/checkout');
  });
});