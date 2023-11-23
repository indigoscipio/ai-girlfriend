import React, { useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const ChatForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setInputValue("");

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      {
        type: "user",
        message: inputValue,
      },
    ]);

    try {
      // Send user message to the AI and wait for it to complete
      await sendMessage(inputValue);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  //send message
  const sendMessage = async (message) => {
    setIsLoading(true);
    const baseURL = "https://api.openai.com/v1/chat/completions";

    try {
      const response = await axios.post(
        baseURL,
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPEN_AI_API_KEY}`,
          },
        }
      );
      console.log(response.data);

      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "bot", message: response.data.choices[0].message.content },
      ]); // Add AI response to chat history
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {chatLog.map((chat, index) => (
        <div
          key={index}
          className={`${
            chat.type === "user"
              ? "bg-blue-500 text-white ml-auto"
              : "bg-gray-200"
          } p-2 rounded mb-2 mr-auto${
            chat.type === "user" ? "ml-auto" : "mr-auto"
          } max-w-md`}
        >
          {chat.message}
        </div>
      ))}

      {isLoading && <Loader />}

      <form onSubmit={handleSubmit} className="flex items-center mb-4">
        <input
          disabled={isLoading}
          className="border border-gray-300 p-2 w-64 rounded-l flex grow"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Chat with AI girlfriend..."
        />
        <button
          type="submit"
          className={` bg-blue-500 text-white p-2 rounded ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
          disabled={isLoading}
        >
          Submit Chat
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
