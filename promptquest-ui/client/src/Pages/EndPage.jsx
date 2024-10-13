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
      <h2 className="header">You Completed Level 1.</h2>
      <img src={require('../assets/level1.jpeg')} alt="Description of image" className="your-image-class" />
      <div className="sp-white-container">
        <p>Well done for embarking on your prompt learning journey. <br></br>Thanks to you Bantu's Grandma is sattisfied with her assiatnce </p>
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