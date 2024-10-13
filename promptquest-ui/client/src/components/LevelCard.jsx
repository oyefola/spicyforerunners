// import React from "react";
// import { FaLock } from "react-icons/fa"; // Ensure you have react-icons installed

// const LevelCard = ({ level, image, description, unlocked, onSelect }) => (
//   <div
//     className={`level-card ${unlocked ? 'unlocked' : 'locked'}`}
//     onClick={unlocked ? onSelect : null}
//   >
//     {!unlocked && <FaLock className="lock-icon" />}
//     <h2 className="level-title">{level}</h2>
//     <img src={image} alt={level} className="level-image" />
//     <p className="level-description">{description}</p>
//   </div>
// );

// export default LevelCard;


import React from "react";
import { FaLock } from "react-icons/fa"; // Ensure you have react-icons installed

const LevelCard = ({ level, image, description, unlocked, onSelect }) => (
  <div
    className={`level-card ${unlocked ? 'unlocked' : 'locked'}`}
    onClick={unlocked ? onSelect : null}
  >
    {!unlocked && <FaLock className="lock-icon" />}
    <h2 className="level-title">{level}</h2>
    <img src={image} alt={level} className="level-image" />
    <p className="level-description">{description}</p>
  </div>
);

export default LevelCard;

