const express = require('express');
const router = express.Router();

// Import your API route handlers
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const messageRoutes = require('./messageRoutes');

// Define your API endpoints
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
