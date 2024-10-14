import React, { useEffect, useState } from "react";
import "../../src/assets/mae.png";
const loading = [
    {
        image: require("../../src/assets/mark.png"),
        text: "Mark Dean - Invented first Personal Computer for IBM.",
    },
    {
        image: require("../../src/assets/kimberly.png"),
        text: "Kimberly Bryant - Started Black Girls Code, thanks to her thousands of black girls are learning how to be inventors in technology.",
    },
    {
        image: require("../../src/assets/shirley.png"),
        text: "Dr. Shirley Ann Jackson - Invented the caller ID, also the first black woman to earna Ph.D. from MIT.",
    },
    {
        image: require("../../src/assets/mae.png"),
        text: "Mae Jemison - The First Black Woman Astronaut, she worked on integrating satellite tech to improve healthcare delivery in developing countries.",
    },
    {
        image: require("../../src/assets/frederick.png"),
        text: "Frederick Jones - Won the National Medal of Technology for inventing the refrigeration system for trucks allowing us to enjoy ice cream and keeping medicine and blood cold.",
    },
];
const LoadingPage = () => {
    const [fact, setFact] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * loading.length);
        setFact(loading[randomIndex]);
    }, []);
    // const getImage = (imageName) => {
    //     if (imageName.includes("mae")) {
    //         return require("../assets/mae.png");
    //     } else if (imageName.includes("mark")) {
    //         return require("../assets/mark.png");
    //     } else if (imageName.includes("kimberly")) {
    //         return require("../assets/kimberly.png");
    //     } else if (imageName.includes("shirley")) {
    //         return require("../assets/shirley.png");
    //     } else if (imageName.includes("frederick")) {
    //         return require("../assets/frederick.png");
    //     }
    // };
    {
        /* */
    }
    return (
        <div className="loading-container">
            <h1 className="header">Loading...</h1>
            {fact && (
                <>
                    {/* <img src={require(fact.image)} className="loading-image" />{" "} */}
                    <img src={fact.image} className="loading-image" />
                    <p className="fact">{`Did you know? \n ${fact.text}`}</p>
                </>
            )}
        </div>
    );
};

export default LoadingPage;
