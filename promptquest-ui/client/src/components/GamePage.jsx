import React from "react";
import { useNavigate } from "react-router-dom";
import StoryCard from "./StoryCard";
import PromptCard from "./PromptCard"; // Fixed the component name
import TipsCard from "./TipsCard";

const GamePage = ({ level }) => {
    // Assume level and task are passed as props
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="sub-header" style={{ textAlign: "center", marginTop: "60px" }}>
                Level {level.level_id}
            </h1>

            <StoryCard />
            <div className="lower-container">
                <div className="left">
                    <h2 className="levels-header">level.yourjob </h2>
                    <PromptCard />
                </div>
                <div className="right">
                    <TipsCard tips={ level.tips} />
                </div>
            </div>
        </div>
    );
};

export default GamePage;
