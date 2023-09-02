import React, { useState } from 'react';
import CartSummary from '../components/CartSummary';

function CheckoutPage() {
  
    const [cartItems, setCartItems] = useState([
      { id: 1, name: 'Product 1', quantity: 2, price: 10.99 },
      { id: 2, name: 'Product 2', quantity: 1, price: 19.99 },
     
    ]);
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <CartSummary cartItems={cartItems}/>
      
    </div>
  );
}

export default CheckoutPage;
