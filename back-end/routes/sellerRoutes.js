const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

// View seller orders
router.get('/seller/orders', sellerController.viewOrders);

// Respond to an order
router.post('/seller/orders/respond', sellerController.respondToOrder);

// Add a product for sale
router.post('/seller/products/add', sellerController.addProductForSale);

module.exports = router;
