const express = require('express');
const router = express.Router();
const authController = require("../controllers/AuthController");

// User registration route
router.post('/signup', authController.signup);

// User login route
router.post('/login', authController.login);

// User logout route
router.get('/logout', authController.logout);

module.exports = router;
