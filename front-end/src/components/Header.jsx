// frontend/src/components/Header.js

import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
