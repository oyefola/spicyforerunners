import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import Bubble from '../components/Bubble'; // Import the Bubble component

const EndPage = () => {
  const navigate = useNavigate();

  const handleEnd = () => {
    navigate('/');
  };

  const handleNext = () => {
    navigate('/levels');
  };

  return (
    <div className='container'>
      <h2 className="header">Thanks to your solution...</h2>
      <img src={require('../assets/level3.jpeg')} alt="Description of image" className="your-image-class" />
      <div className="sp-white-container">
        <p>Some text here.</p>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button text="Next" onClick={handleNext} />
        <Button text="Home" onClick={handleEnd} />
      </div>
      <Bubble text="+100 Gems" /> {/* Add the Bubble component */}
    </div>
  );
};

export default EndPage;