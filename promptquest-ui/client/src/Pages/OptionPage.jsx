import React from "react";
import { useNavigate } from "react-router-dom";
import OptionCard from "../components/OptionCard";

const OptionPage = () => {
  const navigate = useNavigate();
  

  return (
    <div class="levels-container">
        <h1 class="levels-header">Which one is best?</h1>
        <h2 className="levels-subheader"> Click on an option to choose</h2>
        <h2 className="levels-subheader">Hover for hints</h2>
        <div className="option-container">
        <OptionCard
            title="Option 1"
            text="This is the first option."
            hint="This is a hint for the first option."
            onSelect={() => navigate("/end")}
        />
        <OptionCard
            title="Option 2"
            text="This is the second option."
            hint="This is a hint for the second option."
            onSelect={() => navigate("/end")}
        />
        </div>
    </div>
    
  );
};

export default OptionPage;
