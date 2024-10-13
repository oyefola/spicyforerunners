import React, { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";
import GamePage from "../components/GamePage";

const Level1Page = () => {
    const [level, setLevel] = useState(null);

    useEffect(() => {
        console.log(level);

        fetch(`http://localhost:3000/api/levels/1`)
            .then((response) => response.json())
            .then((data) => setLevel(data))
            .catch((error) => console.error("Error:", error));
    }, []);
    return !level ? <LoadingPage /> : <GamePage level={level} />;
};
export default Level1Page;
