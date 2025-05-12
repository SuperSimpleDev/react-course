export function formatMoney(amountCents) {
  if (amountCents < 0) {
    // There are several ways to solve this. This is one example:
    // - Switch the negative number to positive using * -1.
    // - Put the negative sign at the front of the result.
    amountCents = amountCents * -1;
    return `-$${((amountCents) / 100).toFixed(2)}`;
  }

  return `$${(amountCents / 100).toFixed(2)}`;
}