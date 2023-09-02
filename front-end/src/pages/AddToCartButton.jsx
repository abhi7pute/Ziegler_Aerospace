
import React from 'react';

function AddToCartButton() {
  const handleAddToCart = () => {
   
    console.log('Product added to cart');
  };

  return (
    <button onClick={handleAddToCart} className="add-to-cart-button">
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
