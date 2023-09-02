const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

router.get('/seller/orders', sellerController.viewOrders);

router.post('/seller/orders/respond', sellerController.respondToOrder);

router.post('/seller/products/add', sellerController.addProductForSale);

module.exports = router;
