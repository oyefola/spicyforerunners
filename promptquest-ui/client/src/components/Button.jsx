import React from "react";

const Button = ({ text, onClick }) => (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
  
  export default Button;
  