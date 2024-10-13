import React from "react";
import { useHistory } from "react-router-dom";

const HomeButton = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/");
    };

    return (
        <button onClick={handleClick} className="button">
            <div className="container">
                <div className="outer-header-bg">
                    <div className="inner-header-bg">
                        <h1 className="header">Prompt Quest!</h1>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default HomeButton;
