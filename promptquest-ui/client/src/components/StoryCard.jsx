import React from "react";


const StoryCard = () => (
  <div className="story-card">
    <img src={require("../assets/avatar1.png")} alt="Bantu Avatar" /> {/* Added alt for accessibility */}
    <div style={{ textAlign: 'center' }}>Bantu needs help!<br />
    His grandma has lots of chores, so Bantu is building a robot.</div>
  </div>
);

export default StoryCard;
