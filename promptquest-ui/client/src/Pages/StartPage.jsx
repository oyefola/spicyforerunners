import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const StartPage = ({onStart}) => (
  <>
    <div className='container'>
        <div className="outer-header-bg">
            <div className="inner-header-bg">
                <h1 className="header">Prompt Quest!</h1>
            </div>
        </div>
        <div className="sp-white-container">
        <p>Learn to talk to AI and become the next-gen tech star!</p>
        </div>
        <Button text="Start Game" onClick={onStart} />
    </div>
   
  </>
);
export default StartPage;
