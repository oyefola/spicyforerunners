
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LevelCard from '../components/LevelCard';
// import LoadingPage from '../Pages/LoadingPage'; // Import the loading page
// import useLoadingData from '../hooks/useLoadingData'; // Import the custom loading hook

const LevelsPage = () => {
    const selectedAvatar = JSON.parse(localStorage.getItem('selectedAvatar')) || { name: 'DefaultName' };
    const navigate = useNavigate();
    // const { loadingFact, isLoading, fetchLoadingData } = useLoadingData(); // Use the custom hook

    const levels = [
        {
            level: 'Level 1',
            description: `Help ${selectedAvatar.name} build an assistant robot!`,
            image: require("../assets/level1.jpeg"),
            status: 'unlocked',
        },
        {
            level: 'Level 2',
            description: `Assist ${selectedAvatar.name} in programming a smart fridge!`,
            image: require("../assets/level2.jpeg"),
            status: 'locked',
        },
        {
            level: 'Level 3',
            description: `Team up with ${selectedAvatar.name} to create a fun AI game!`,
            image: require("../assets/level3.jpeg"),
            status: 'locked',
        },
    ];

    const onLevelSelect = (level) => {
        if (level.status === 'unlocked') {
            // fetchLoadingData(); // Fetch loading data
            setTimeout(() => {
                localStorage.setItem('selectedLevel', JSON.stringify(level)); // Store the selected level
                navigate('/game'); // Navigate to the game page after fetching
            }, 2000); // Adjust timeout duration as needed
        }
    };

    // // Show loading page if data is being fetched
    // if (isLoading) {
    //     return <LoadingPage fact={loadingFact} />;
    // }

    return (
        <div className="levels-container">
            <h1 className="levels-header">Levels</h1>
            <h2 className="levels-subheader">Complete levels to unlock new adventures</h2>
            <div className="avatar-container">
                {levels.map((level) => (
                    <LevelCard
                        key={level.level}
                        level={level.level}
                        description={level.description}
                        image={level.image}
                        unlocked={level.status === 'unlocked'}
                        onSelect={() => onLevelSelect(level)} // Handle level selection
                    />
                ))}
            </div>
        </div>
    );
};

export default LevelsPage;
