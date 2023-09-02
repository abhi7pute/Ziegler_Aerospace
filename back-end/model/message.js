const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for the sender
    required: true,
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for the recipient
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
