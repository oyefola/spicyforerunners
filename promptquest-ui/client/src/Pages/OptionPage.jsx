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
      title: "Stronger Prompt",
      text: "Bantu's assistant robot should have a GPS, a shopping list feature that categorizes items by aisle, and a gentle reminder system to help grandma stay on track. Include voice commands for easy navigation and an option to track what she buys.",
      hint: "This prompt is detailed, specifying features (GPS, shopping list) that help the AI give more useful and targeted responses.",
    },
    {
      title: "Weaker Prompt",
      text: "Bantu's assistant robot should help grandma when she goes shopping, reminding her of important things and keeping her safe.",
      hint: "While this is a good prompt, it is more vague. Adding specific features or actions makes the prompt clearer and more actionable for the AI.",
    },
  ];

  const handleSelect = (prompt) => {
    localStorage.setItem('selectedPrompt', JSON.stringify(prompt)); // Store the selected prompt
    navigate('/results2'); // Navigate to the results page
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
