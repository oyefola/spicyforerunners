import React from 'react';


const LoadingPage = ({ fact }) => {
    return (
        <div className="loading-container">
            <h1 className='header'>Loading...</h1>
            {/* <img src={fact.image} className="loading-image" /> */}
            <p>{fact.fact}</p>
            {/* <div className="loading-icon"> </div> */}
        </div>
    );
};

export default LoadingPage;
