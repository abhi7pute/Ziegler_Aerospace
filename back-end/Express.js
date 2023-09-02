const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('/../middleware/authenticationMiddleware');
const authorizationMiddleware = require('/../middleware/authorizationMiddleware');
const validateInput = require('/../middleware/validationMiddleware');
const errorHandler = require('/../middleware/errorHandlingMiddleware');

// Protected route using authentication middleware
router.get('/protected', authenticationMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Admin-only route using authorization middleware
router.get('/admin', authenticationMiddleware, authorizationMiddleware, (req, res) => {
  res.json({ message: 'This is an admin-only route' });
});

// Route with input validation
router.post('/submit', validateInput, (req, res) => {
  // Handle the validated data
});

module.exports = router;
