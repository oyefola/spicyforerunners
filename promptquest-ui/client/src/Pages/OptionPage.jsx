// import React from "react";
// import { useNavigate } from "react-router-dom";
// import OptionCard from "../components/OptionCard";

// const OptionPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div class="levels-container">
//         <h1 class="levels-header">Which one is best?</h1>
//         <h2 className="levels-subheader"> Click on an option to choose</h2>
//         <h2 className="levels-subheader">Hover for hints</h2>
//         <div className="option-container">
//         <OptionCard
//             title="Option 1"
//             text="This is the first option."
//             hint="This is a hint for the first option."
//             onSelect={() => navigate("/end")}
//         />
//         <OptionCard
//             title="Option 2"
//             text="This is the second option."
//             hint="This is a hint for the second option."
//             onSelect={() => navigate("/ResultsPage2")}
//         />
//         </div>
//     </div>

//   );
// };

// export default OptionPage;
import React from "react";
import { useNavigate } from "react-router-dom";
import OptionCard from "../components/OptionCard"; // Assuming OptionCard component supports hint on hover

const OptionPage = () => {
    const navigate = useNavigate();

    const promptOptions = [
        {
            title: "Option 1",
            text: "Welcome to Joyful Meadows, a vibrant park where everyone can find joy! Kids can explore colorful playgrounds with swings, slides, and adventure zones, while adults unwind in lush picnic areas, scenic walking paths, and serene relaxation corners. Pets have their own dedicated play zone with obstacle courses and splash fountains. It’s a place where families, friends, and furry companions can come together, play, laugh, and create unforgettable memories!",
            hint: "This park design has shared family fun and pet areas",
        },
        {
            title: "Option 2",
            text: "At Harmony Park, fun meets tranquility for all ages! Kids can enjoy thrilling jungle gyms, zip lines, and interactive learning stations, while adults relax in shaded gardens, yoga zones, and cozy cafes. Pet-friendly trails wind through the park, leading to open spaces where animals can roam freely. Whether it’s family picnics, solo walks, or a day out with your furry friend, Harmony Park offers a space for everyone to connect with nature and each other.",
            hint: "This park design has jungle gyms and shaded areas to relax",
        },
    ];

    const handleSelect = (prompt) => {
        localStorage.setItem("selectedPrompt", JSON.stringify(prompt)); // Store the selected prompt
        navigate("/results2"); // Navigate to the results page
    };

    return (
        <div className="levels-container">
            <h1 className="levels-header">Which one is best?</h1>
            <h2 className="levels-subheader">Click on an option to choose</h2>
            <h2 className="levels-subheader">Hover for hints</h2>
            <div className="option-container">
                {promptOptions.map((option, index) => (
                    <OptionCard
                        key={index}
                        title={option.title}
                        text={option.text}
                        hint={option.hint} // Pass the hint for hover effect
                        onSelect={() => handleSelect(option.text)} // Store prompt and navigate
                    />
                ))}
            </div>
        </div>
    );
};

export default OptionPage;
