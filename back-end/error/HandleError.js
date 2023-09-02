const express = require('express');
const router = express.Router();
const { handleError } = require("../utils/error");

// Example API route handler
router.get('/example', (req, res) => {
  try {
    // Your code here
    // If an error occurs, you can use handleError like this:
    // throw new Error('This is an example error');
    res.json({ message: 'Success' });
  } catch (error) {
    // Use the handleError function to send an error response
    handleError(res, error);
  }
});

module.exports = router;
