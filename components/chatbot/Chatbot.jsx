import React, { useState } from "react";
import './chatbot.css'; 

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! Talk to us" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInput = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { from: "user", text: inputMessage }]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Thank you for your message! We will get back to you shortly." },
        ]);
      }, 1000);
    }
    setInputMessage("");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-icon ${isOpen ? "open" : ""}`} onClick={toggleChat}>
        <span>💬</span>
      </div>
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h3>TechSynergy Assistant</h3>
            <button onClick={toggleChat} className="close-btn">✖️</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.from}`}>
                <div className="message-text">{msg.text}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={handleInput}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

