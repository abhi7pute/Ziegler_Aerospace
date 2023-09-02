const Message = require('../models/Message'); // Import your Message model

// Send a message
exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, messageText } = req.body;

    // Create a new message
    const message = new Message({ senderId, receiverId, messageText });

    // Save message to the database
    await message.save();

    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get messages between two users
exports.getMessages = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).sort('createdAt');

    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Other messaging-related controller functions can be added similarly.
