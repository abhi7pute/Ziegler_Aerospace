import React, { useState } from 'react';

const AddToCartButton = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // Here, you can implement the logic to add the product to the cart
    // For example, you might use a Redux store or state management library.
    onAddToCart(product, quantity);
  };

  return (
    <div className="add-to-cart-button">
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCartButton;
