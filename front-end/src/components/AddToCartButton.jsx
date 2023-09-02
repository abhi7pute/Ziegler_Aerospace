import React, { useState } from 'react';

const AddToCartButton = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    
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
