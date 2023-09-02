// authenticationMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config'); // Your JWT secret and configuration

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
