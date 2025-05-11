import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { PaymentSummary } from './PaymentSummary';

describe('PaymentSummary component', () => {
  let paymentSummary;
  let loadCart;

  beforeEach(() => {
    paymentSummary = {
      totalItems: 3,
      productCostCents: 4275,
      shippingCostCents: 499,
      totalCostBeforeTaxCents: 4774,
      taxCents: 477,
      totalCostCents: 5251
    };

    loadCart = vi.fn();
  });

  it('displays the correct details', async () => {
    render(
      <MemoryRouter>
        <PaymentSummary
          paymentSummary={paymentSummary}
          loadCart={loadCart}
        />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Items (3):')
    ).toBeInTheDocument();

    // There are multiple ways to check the text inside an element.
    // 1. within() + getByText() + toBeInTheDocument()
    expect(
      within(screen.getByTestId('payment-summary-product-cost'))
        .getByText('$42.75')
    ).toBeInTheDocument();

    // 2. getByTestId() + toHaveTextContent()
    // (toHaveTextContent() checks the text inside an element)
    // This solution is a little cleaner in this case.
    expect(
      screen.getByTestId('payment-summary-shipping-cost')
    ).toHaveTextContent('$4.99');

    expect(
      screen.getByTestId('payment-summary-total-before-tax')
    ).toHaveTextContent('$47.74');

    expect(
      screen.getByTestId('payment-summary-tax')
    ).toHaveTextContent('$4.77');

    expect(
      screen.getByTestId('payment-summary-total')
    ).toHaveTextContent('$52.51');
  });
});