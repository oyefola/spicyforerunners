import React, { useState } from "react";

const OptionCard = ({ title, text, hint, onSelect }) => {
    const [showHint, setShowHint] = useState(false);

    return(
    <div
        className="option-card"
        onClick={onSelect}
        onMouseEnter={() => setShowHint(true)}
        onMouseLeave={() => setShowHint(false)}
    >
        <h3 className="option-title">{title}</h3>
        <p className="option-text">{text}</p>
        {showHint && <p className="option-hint">{hint}</p>}
    </div>
    );
};
  
export default OptionCard;
  
