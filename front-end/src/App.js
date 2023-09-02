import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/style.css';

import IntroductoryPage from './pages/IntroductoryPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import BuyerDashboardPage from './pages/BuyerDashboardPage';
import SellerDashboard from './pages/SellerDashboardPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact component={IntroductoryPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/buyer/dashboard" component={BuyerDashboardPage} />
          <Route path="/seller/dashboard" component={SellerDashboard} />
          <Route path="/product/:id" component={ProductDetailsPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={CheckoutPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
