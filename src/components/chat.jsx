import React, { useState, useEffect, useRef } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat when messages change
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      // In a real chatbot scenario, you would send the user's message to a server
      // and get a response from the chatbot, updating the state accordingly.
      setInputValue("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-md shadow-md w-1/3">
      {" "}
      {/* Updated className */}
      <div className="h-80 overflow-y-auto border-b" ref={chatContainerRef}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 mb-2 ${
              msg.isUser
                ? "text-right text-blue-500"
                : "text-left text-gray-700"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <iframe
        height="430"
        width="350"
        src="https://bot.dialogflow.com/d6e1f6ff-8f0e-4fc3-999b-3cc94b29dfcc"
      ></iframe>
      <div className="flex mt-2">
        <input
          type="text"
          className="flex-grow border p-2 rounded-l-md"
          placeholder="Type a message..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r-md"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
