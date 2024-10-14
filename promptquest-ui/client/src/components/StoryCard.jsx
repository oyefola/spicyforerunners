import React from "react";

const StoryCard = ({ story }) => (
    <div className="story-card">
        <img src={require("../assets/avatar5.png")} className="avatar-story" alt="Bantu Avatar" />{" "}
        {/* Added alt for accessibility */}
        <div className="text-container" style={{ textAlign: "center" }}>
            {story}
        </div>
    </div>
);

export default StoryCard;
