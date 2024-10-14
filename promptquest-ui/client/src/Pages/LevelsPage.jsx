import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LevelCard from "../components/LevelCard";
// import LoadingPage from '../Pages/LoadingPage'; // Import the loading page
// import useLoadingData from '../hooks/useLoadingData'; // Import the custom loading hook

const LevelsPage = () => {
    // const selectedAvatar = JSON.parse(localStorage.getItem("selectedAvatar")) || { name: "DefaultName" };
    const navigate = useNavigate();
    // const { loadingFact, isLoading, fetchLoadingData } = useLoadingData(); // Use the custom hook

    const [levels, setLevels] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/levels")
            .then((response) => response.json())
            .then((data) => setLevels(data))
            .catch((error) => console.error("Error:", error));
    }, []);
    const onLevelSelect = (level) => {
        if (level.open) {
            navigate("/level1"); // Adjust timeout duration as needed
        }
    };

    return (
        <div className="levels-container">
            <h1 className="levels-header">Levels</h1>
            <h2 className="levels-subheader">Complete levels to unlock new adventures</h2>

            <div className="avatar-container">
                {levels.map((level) => (
                    <LevelCard
                        key={level.level_id}
                        level={level}
                        description={level.title}
                        image={level.image_url}
                        unlocked={level.open}
                        onSelect={() => onLevelSelect(level)} // Handle level selection
                    />
                ))}
            </div>
        </div>
    );
};

export default LevelsPage;
