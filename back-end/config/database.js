const mongoose = require('mongoose');

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/Ziegler_Aerospace';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
