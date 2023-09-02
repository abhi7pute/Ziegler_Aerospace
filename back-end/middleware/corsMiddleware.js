// corsMiddleware.js
const cors = require('cors');

const corsOptions = {
  origin: 'http://yourfrontenddomain.com',
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
