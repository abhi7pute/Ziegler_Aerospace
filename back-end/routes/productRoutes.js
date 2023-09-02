const express = require('express');
const router = express.Router();
const productController = require('/../controllers/productController');

// Get all products
router.get('/products', productController.getAllProducts);

// Add a new product (seller route)
router.post('/products', productController.addProduct);

// Search for products
router.get('/products/search', productController.searchProducts);

module.exports = router;
