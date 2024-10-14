import React from "react";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
    const navigate = useNavigate();

    // Safely parse the submitted prompt, with a fallback for empty or null values
    const submittedPrompt = localStorage.getItem("submittedPrompt");
    const promptText = submittedPrompt ? JSON.parse(submittedPrompt) : "No prompt submitted yet.";
    const imageUrl = localStorage.getItem("image");
    const checklist = JSON.parse(localStorage.getItem("checklist"));

    fetch("http://localhost:3000/api/scoreResponseImage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Ensure JSON is sent to the backend
        },
        body: JSON.stringify({ checklist, imageUrl }), // Send the checklist and image as JSON
    })
        .then((response) => response.json()) // Parse the JSON response
        .then((data) => {
            console.log("Score:", data.score); // Log the score to the console
        })
        .catch((error) => {
            console.error("Error:", error); // Handle any errors
        });
    const handleRetry = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleContinue = () => {
        // Navigate to the next level (Update the path as needed)
        navigate("/option");
    };

    return (
        <div className="results-container">
            <div className="image-section">
                <h1 className="result-header">Here's what your prompt created:</h1>
                <p className="submitted-prompt">"{promptText}"</p>
                <img src={imageUrl} alt="Result" className="result-image" />
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
                        <img src={require("../assets/avatar1.png")} alt="Avatar" className="avatar-image" />
                    </div>
                </div>
                <div className="button-container">
                    <button className="retry-button" onClick={handleRetry}>
                        Retry
                    </button>
                    <button className="continue-button" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;
