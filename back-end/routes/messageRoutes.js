const express = require('express');
const router = express.Router();
const messageController = require('/../controllers/messageController');

// Send a message
router.post('/messages/send', messageController.sendMessage);

// Get messages for a specific conversation
router.get('/messages/:conversationId', messageController.getMessages);

module.exports = router;
