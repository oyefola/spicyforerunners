import React, { useEffect, useState } from "react";

const LoadingPage = () => {
    const [fact, setFact] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/loadingscreen")
            .then((response) => response.json())
            .then((data) => setFact(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    const getImage = (imageName) => {
        if (imageName.includes("mae")) {
            return require("../assets/mae.png");
        } else if (imageName.includes("mark")) {
            return require("../assets/mark.png");
        } else if (imageName.includes("kimberly")) {
            return require("../assets/kimberly.png");
        } else if (imageName.includes("shirley")) {
            return require("../assets/shirley.png");
        } else if (imageName.includes("frederick")) {
            return require("../assets/frederick.png");
        }
    };

    if (!fact) {
        return <div>Loading...</div>;
    }

    return (
        <div className="loading-container">
            <h1 className="header">Loading...</h1>
            <img src={getImage(fact.text)} className="loading-image" />
            <p>{`Did you know? \n ${fact.text}`}</p>
        </div>
    );
};

export default LoadingPage;
