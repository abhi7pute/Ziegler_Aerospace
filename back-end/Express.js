const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('/../middleware/authenticationMiddleware');
const authorizationMiddleware = require('/../middleware/authorizationMiddleware');
const validateInput = require('/../middleware/validationMiddleware');
const errorHandler = require('/../middleware/errorHandlingMiddleware');


router.get('/protected', authenticationMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route' });
});


router.get('/admin', authenticationMiddleware, authorizationMiddleware, (req, res) => {
  res.json({ message: 'This is an admin-only route' });
});


router.post('/submit', validateInput, (req, res) => {
  
});

module.exports = router;
