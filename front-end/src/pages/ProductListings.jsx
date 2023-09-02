// src/components/ProductListings.js
import React from 'react';

// Assuming you have product data as an array of objects
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 150,
  },
  // ... add more products
];

function ProductListings() {
  return (
    <div className="product-listings">
      <h2>Product Listings</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListings;
