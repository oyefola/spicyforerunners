import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';

const PromptCard = () => {
  const [prompt, setPrompt] = useState(""); // State to store user input
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = () => {
    if (prompt.trim() !== "") {
      localStorage.setItem('submittedPrompt', JSON.stringify(prompt));
      navigate('/results'); // Navigate to the results page
    }
  };

  return (
    <div className="prompt-container">
      <textarea
        rows="6" // Set the height of the input box
        placeholder="Type Your Prompt here..."
        value={prompt} // Controlled component
        onChange={(e) => setPrompt(e.target.value)} // Update state on input change
        className="prompt-input"
      />
      <Button text="Generate" onClick={handleSubmit} /> {/* Submit button */}
    </div>
  );
};

export default PromptCard;

