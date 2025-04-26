import axios from 'axios';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import './App.css'

// This makes axios available in the Console.
// - Then, you can try running axios.post('/api/reset') in the Console.
window.axios = axios;

// More details:
// - Normally, we can't access values (like axios) outside of a file.
// - However, JavaScript has a built-in, global object called window
//   (this represents the browser window).
// - So one way to make a value accessible anywhere (including in the
//   Console), is to attach it to the window object. That's why we
//   do window.axios = axios;
// - Now, in the Console, we can run window.axios.post(...)
// - And JavaScript has another shortcut we can use. If we just type
//   "axios", this is a shortcut for "window.axios"
// - That's why the code window.axios = axios; lets us use "axios"
//   anywhere (including in the Conosle).

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart} />} />
    </Routes>
  )
}

export default App
