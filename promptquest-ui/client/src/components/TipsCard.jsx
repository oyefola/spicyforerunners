import React from "react";
const TipsCard = ({ tips }) => (
    <div className="tip-card">
        <h1>Top Tips</h1>
        {tips.map((tip, index) => (
            <p key={index}>
                {index + 1}. {tip}
            </p>
        ))}
    </div>
);

export default TipsCard;
