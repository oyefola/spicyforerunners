import React from 'react';
import '../styles.css'; // Import the CSS file for the bubble

const Bubble = ({ text }) => (
  <div className="bubble">
    {text}
  </div>
);

export default Bubble;