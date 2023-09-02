// src/components/AddToCartButton.js
import React from 'react';

function AddToCartButton() {
  const handleAddToCart = () => {
    // Add the selected product to the cart
    console.log('Product added to cart');
  };

  return (
    <button onClick={handleAddToCart} className="add-to-cart-button">
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
