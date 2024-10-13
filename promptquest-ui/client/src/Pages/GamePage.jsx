import React from 'react';
import { useNavigate } from 'react-router-dom';
import StoryCard from '../components/StoryCard';
import PromptCard from '../components/PromptCard'; // Fixed the component name
import TipsCard from '../components/TipsCard';

const GamePage = ({ level, task }) => { // Assume level and task are passed as props
    const navigate = useNavigate();

    return (
        <div>
            <h1 className='sub-header' style={{ textAlign: 'center', marginTop: '60px' }}>Level 1</h1>

            <StoryCard />
            <div className='lower-container'>
                <div className='left'>
                    <h2 className='levels-header'>Your Job: Help Bantu design his robot! </h2>
                    <PromptCard />
                </div>
                <div className='right'>
                    <TipsCard />
                </div>
            </div>
        </div>
    );
};

export default GamePage;
