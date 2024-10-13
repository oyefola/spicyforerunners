import { useState, useEffect } from 'react';

const useLoadingData = () => {
    const [loadingFact, setLoadingFact] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchLoadingData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/data/facts.json'); // Path to your JSON file
            const data = await response.json();
            const randomIndex = Math.floor(Math.random() * data.facts.length);
            setLoadingFact(data.facts[randomIndex]); // Set a random fact
        } catch (error) {
            console.error("Error fetching loading data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return { loadingFact, isLoading, fetchLoadingData };
};

export default useLoadingData;
