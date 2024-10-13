import React from "react";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const navigate = useNavigate();
  const submittedPrompt = JSON.parse(localStorage.getItem('submittedPrompt')) || "No prompt submitted yet.";

  const handleRetry = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleContinue = () => {
    // Navigate to the next level (Update the path as needed)
    navigate('/levels');
  };

  return (
    <div className="results-container">
      <div className="image-section">
        <img src={require("../assets/avatar1.png")} alt="Result" className="result-image" />
      </div>
      <div className="feedback-section">
        <h1>Feedback from Your Avatar</h1>
        <div className="feedback-box">
          <p>Here's what your avatar thinks:</p>
          <ul>
            <li>✅ Great job on the prompt!</li>
            <li>✅ You can improve by adding more details.</li>
            <li>✅ Remember to stay creative!</li>
          </ul>
        </div>
        <p>Your Submitted Prompt:</p>
        <p className="submitted-prompt">{submittedPrompt}</p>
        <div className="button-container">
          <button className="retry-button" onClick={handleRetry}>Retry</button>
          <button className="continue-button" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
