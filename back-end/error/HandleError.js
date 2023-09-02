const express = require('express');
const router = express.Router();
const { handleError } = require("../utils/error");

router.get('/example', (req, res) => {
  try {
    res.json({ message: 'Success' });
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;
