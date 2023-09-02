// src/pages/SellerDashboard.js

import React, { useState, useEffect } from 'react';


function SellerDashboard() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0 }); // Example product fields

  // Fetch seller's products from the backend (you would need to implement this)
  useEffect(() => {
    // Fetch products and set them to the products state
    // Example fetch code:
    // fetch('/api/seller/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    //   .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
   
    // fetch('/api/seller/products', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newProduct),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Update the products state with the new product
    //     setProducts([...products, data]);
    //     // Clear the input fields
    //     setNewProduct({ name: '', price: 0 });
    //   })
    //   .catch(error => console.error('Error adding product:', error));
  };

  return (
    <div>
      <h1>Seller Dashboard</h1>

      <div>
        <h2>Your Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Add a New Product</h2>
        <form>
          <div>
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={handleAddProduct}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default SellerDashboard;
