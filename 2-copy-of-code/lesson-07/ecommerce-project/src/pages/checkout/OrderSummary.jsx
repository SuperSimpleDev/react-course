import dayjs from 'dayjs';
import { CartItemDetails } from './CartItemDetails';
import { DeliveryOptions } from './DeliveryOptions';

export function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
        const selectedDeliveryOption = deliveryOptions
          .find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
          });

        return (
          <div key={cartItem.productId} className="cart-item-container">
            <div className="delivery-date">
              Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
            </div>

            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem} />

              <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} />
            </div>
          </div>
        );
      })}
    </div>
  );
}