// src/pages/IntroductoryPage.js
import React from 'react';
import Header from '../components/Header';
import CompanyServices from '../components/CompanyServices';
import CustomerTestimonials from '../components/CustomerTestominals';
import Footer from '../components/Footer';

function IntroductoryPage() {
  return (
    <div className="introductory-page">
      <Header />
      <main>
        <CompanyServices />
        <CustomerTestimonials />
      </main>
      <Footer />
    </div>
  );
}

export default IntroductoryPage;
