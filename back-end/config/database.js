const mongoose = require('mongoose');

// MongoDB connection URL
const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';

// Connect to MongoDB
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

// Handle MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
