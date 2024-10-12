import React from "react";

// Button.js
const Button = ({ text, onClick }) => (
    <button 
      onClick={onClick} 
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ease-in-out"
    >
      {text}
    </button>
  );
  
  export default Button;
  
  