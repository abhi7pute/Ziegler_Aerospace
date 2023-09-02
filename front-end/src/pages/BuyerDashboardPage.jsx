// src/pages/BuyerDashboardPage.js
import React from 'react';
import ProductListings from '../components/ProductListing';

function BuyerDashboardPage() {
  return (
    <div className="buyer-dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <ProductListings />
    </div>
  );
}

export default BuyerDashboardPage;
