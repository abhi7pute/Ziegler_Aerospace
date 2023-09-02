// src/pages/ProductDetailsPage.js
import React from 'react';
import ProductInfo from '../components/ProductInfo';
import AddToCartButton from '../components/AddToCartButton';

function ProductDetailsPage() {
  const product = {
    name: 'Product Name',
    description: 'Product Description',
    location: 'Product Location',
    quantity: 10,
    marketPrice: 100,
    shippingDate: 'August 30, 2023',
    seller: 'Seller Name',
  };
  return (
    <div className="product-details-page">
      <ProductInfo product={product}/>
      <AddToCartButton />
    </div>
  );
}

export default ProductDetailsPage;
