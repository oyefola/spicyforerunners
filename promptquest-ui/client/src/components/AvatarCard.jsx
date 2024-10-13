import React from "react";

const AvatarCard = ({ image, name, onSelect }) => (
    <div className="avatar-card" onClick={onSelect}>
      <img src={image}/>
      <h3>{name}</h3>
    </div>
  );
  
  export default AvatarCard;
  
