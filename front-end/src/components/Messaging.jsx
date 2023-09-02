// frontend/src/components/Messaging.js

import React, { useState } from 'react';

function Messaging() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageSend = () => {
    // Handle sending messages to the server
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div className="messaging">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">{message}</div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
}

export default Messaging;
