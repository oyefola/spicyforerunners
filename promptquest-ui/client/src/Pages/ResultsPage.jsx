import React from "react";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const navigate = useNavigate();
  
  // Safely parse the submitted prompt, with a fallback for empty or null values
  const submittedPrompt = localStorage.getItem('submittedPrompt');
  const promptText = submittedPrompt ? JSON.parse(submittedPrompt) : "No prompt submitted yet.";

  const handleRetry = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleContinue = () => {
    // Navigate to the next level (Update the path as needed)
    navigate('/option');
  };

  return (
    <div className="results-container">
      <div className="image-section">
        <h1 className="result-header">Here's what your prompt created:</h1>
        <p className="submitted-prompt">"{promptText}"</p>
        <img src={require("../assets/placeholder.jpeg")} alt="Result" className="result-image" />
      </div>
      
      <div className="feedback-section">
        <div className="fb-upper-container">
          <p className="result-header">Score: 3/4</p>
          <div>
          <p>Total XP earnt:100</p>
          </div>
          
        </div>

        <div className="fb-lower-container">
          <div className="feedback-box">
            <p className="title">Here's what your avatar thinks:</p>
            <ul>
              <li>✅ Great job on the prompt!</li>
              <li>✅ You can improve by adding more details.</li>
              <li>✅ Remember to stay creative!</li>
            </ul>
          </div>

          <div>
            {/* Avatar image */}
            <img src={require("../assets/avatar1.png")} alt="Avatar" className="avatar-image"/>
            
          </div>
        </div>
        <div className="button-container">
          <button className="retry-button" onClick={handleRetry}>Retry</button>
          <button className="continue-button" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;



