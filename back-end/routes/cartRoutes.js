const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/cart/add', cartController.addToCart);

router.get('/cart', cartController.viewCart);

router.delete('/cart/remove/:productId', cartController.removeFromCart);

router.post('/checkout', cartController.checkout);

module.exports = router;
