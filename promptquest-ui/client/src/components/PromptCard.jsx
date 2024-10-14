import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const PromptCard = (checklist) => {
    const [prompt, setPrompt] = useState(""); // State to store user input
    const navigate = useNavigate(); // Hook for navigation
    localStorage.setItem("checklist", JSON.stringify(checklist));
  
    const handleSubmit = () => {
        if (prompt.trim() !== "") {
            localStorage.setItem("submittedPrompt", JSON.stringify(prompt));

            // Call the backend API
            fetch(`http://localhost:3000/api/level1image?prompt=${encodeURIComponent(prompt)}`)
                .then((response) => response.json())
                .then((data) => localStorage.setItem("image", data.imageUrl))
              .catch((error) => console.error("Error:", error));
          
           
            navigate("/results");
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
