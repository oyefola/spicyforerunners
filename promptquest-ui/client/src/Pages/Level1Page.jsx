import axios from "axios";
import React, { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";
import { GamePage } from "../components/GamePage";

const Level1Page = () => {
    const [level, setLevel] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:3000/api/level/1")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => setLevel(data))
                .catch((error) => console.error("Error:", error));
        }, 5000); // 5000 milliseconds = 5 seconds
    }, []);

    return !level ? <LoadingPage /> : <GamePage level={level} />;
};

export default Level1Page;
