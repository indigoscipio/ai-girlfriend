import React from "react";
import ChatForm from "./components/ChatForm";

export const App = () => {
  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <div className="py-8 text-center">
        <h2 className="font-bold text-2xl mb-2">
          Personal AI Girlfriend - v0.01
        </h2>
        <h3 className="text-gray-600">By Indigoscipio</h3>
      </div>
      <ChatForm />
    </div>
  );
};

export default App;
