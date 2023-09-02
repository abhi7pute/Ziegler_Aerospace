
import React from 'react';

function ProductListing({ products }) {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Location: {product.location}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
