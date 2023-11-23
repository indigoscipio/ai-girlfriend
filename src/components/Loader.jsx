import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center p-16">
      <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin h-12 w-12"></div>
    </div>
  );
};

export default Loader;
