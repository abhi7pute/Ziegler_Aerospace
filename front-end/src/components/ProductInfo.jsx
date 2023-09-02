import React from 'react';

const ProductInfo = ({ product }) => {
  return (
    <div className="product-info">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className="product-details">
        <div>
          <strong>Location:</strong> {product.location}
        </div>
        <div>
          <strong>Quantity Available:</strong> {product.quantity}
        </div>
        <div>
          <strong>Market Price:</strong> ${product.marketPrice}
        </div>
        <div>
          <strong>Estimated Shipping Date:</strong> {product.shippingDate}
        </div>
        <div>
          <strong>Seller:</strong> {product.seller}
        </div>
      </div>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductInfo;
