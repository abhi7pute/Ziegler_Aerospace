
import React from 'react';

const CartSummary = ({ cartItems }) => {

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2);
  };

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total Price:</strong> ${calculateTotalPrice()}
      </div>
    </div>
  );
};

export default CartSummary;
