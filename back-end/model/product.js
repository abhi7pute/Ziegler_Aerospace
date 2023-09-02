const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['buyer', 'seller'],
    default: 'buyer',
  },
  // Additional user-related fields can be added here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
