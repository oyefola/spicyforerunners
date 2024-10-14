import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Bubble from "../components/Bubble"; // Import the Bubble component

const EndPage = () => {
    const navigate = useNavigate();

    const handleEnd = () => {
        navigate("/");
    };

    const handleNext = () => {
        navigate("/levels");
    };

    return (
        <div className="container">
            <h2 className="header">You Completed Level 1!🎉</h2>
            <img
                src={require("../../src/assets/image-copy.png")}
                alt="Description of image"
                className="your-image-class"
            />
            <div className="sp-white-container">
                <p>
                    Well done for embarking on your prompt learning journey. <br></br>Thanks to you Bantu's Village park
                    became a lively community hub . Families, kids, and pet owners bonded. The park's interactive and
                    relaxing areas promoted well-being and gave an inviting space for relaxation and play
                </p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <Button text="Next" onClick={handleNext} />
                <Button text="Home" onClick={handleEnd} />
            </div>
            <Bubble text="+100 Gems" /> {/* Add the Bubble component */}
        </div>
    );
};

export default EndPage;
