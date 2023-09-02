const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add a product to the cart
router.post('/cart/add', cartController.addToCart);

// View cart
router.get('/cart', cartController.viewCart);

// Remove a product from the cart
router.delete('/cart/remove/:productId', cartController.removeFromCart);

// Checkout
router.post('/checkout', cartController.checkout);

module.exports = router;
