
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const handleSendMessage = async () => {
    const newMessage = inputRef.current.value;
    if (newMessage.trim() === '') {
      return;
    }

    const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(updatedMessages);
    inputRef.current.value = '';

    try {
      
      const response = await axios.post('chatbot_api_endpoint', { message: newMessage });
      const botReply = response.data.reply;
      const updatedMessagesWithBotReply = [...updatedMessages, { text: botReply, sender: 'bot' }];
      setMessages(updatedMessagesWithBotReply);
    } catch (error) {
      
    }
  }

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={message.sender}>
            {message.text}
          </div>
        ))}
      </div>
      <input type="text" ref={inputRef} placeholder="Type a message..." />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
