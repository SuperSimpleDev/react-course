import { Header } from '../components/Header';
import './OrdersPage.css';

export function OrdersPage() {
  return (
    <>
      <title>Orders</title>

      <Header />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          <div className="order-container">

            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>August 12</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>$35.06</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
              </div>
            </div>

            <div className="order-details-grid">
              <div className="product-image-container">
                <img src="images/products/athletic-cotton-socks-6-pairs.jpg" />
              </div>

              <div className="product-details">
                <div className="product-name">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className="product-delivery-date">
                  Arriving on: August 15
                </div>
                <div className="product-quantity">
                  Quantity: 1
                </div>
                <button className="buy-again-button button-primary">
                  <img className="buy-again-icon" src="images/icons/buy-again.png" />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <a href="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>

              <div className="product-image-container">
                <img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
              </div>

              <div className="product-details">
                <div className="product-name">
                  Adults Plain Cotton T-Shirt - 2 Pack
                </div>
                <div className="product-delivery-date">
                  Arriving on: August 19
                </div>
                <div className="product-quantity">
                  Quantity: 2
                </div>
                <button className="buy-again-button button-primary">
                  <img className="buy-again-icon" src="images/icons/buy-again.png" />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <a href="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="order-container">

            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>June 10</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>$41.90</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>b6b6c212-d30e-4d4a-805d-90b52ce6b37d</div>
              </div>
            </div>

            <div className="order-details-grid">
              <div className="product-image-container">
                <img src="images/products/intermediate-composite-basketball.jpg" />
              </div>

              <div className="product-details">
                <div className="product-name">
                  Intermediate Size Basketball
                </div>
                <div className="product-delivery-date">
                  Arriving on: June 17
                </div>
                <div className="product-quantity">
                  Quantity: 2
                </div>
                <button className="buy-again-button button-primary">
                  <img className="buy-again-icon" src="images/icons/buy-again.png" />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <a href="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}