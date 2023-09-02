const Message = require('../models/Message'); 
exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, messageText } = req.body;

    const message = new Message({ senderId, receiverId, messageText });

    await message.save();

    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

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
