const Message = require('/../models/Message');

class MessageService {
  async createMessage(senderId, receiverId, content) {
    try {
      const newMessage = new Message({ sender: senderId, receiver: receiverId, content });
      await newMessage.save();
      return newMessage;
    } catch (error) {
      throw error;
    }
  }

  async getMessagesByUser(userId) {
    try {
      const messages = await Message.find({ $or: [{ sender: userId }, { receiver: userId }] });
      return messages;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new MessageService();
