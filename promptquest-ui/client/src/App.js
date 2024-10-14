import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import StartPage from "./Pages/StartPage";
import AvatarPage from "./Pages/AvatarPage";
import LevelsPage from "./Pages/LevelsPage";
import ResultsPage from "./Pages/ResultsPage";
import ResultsPage2 from "./Pages/ResultsPage2";
import OptionPage from "./Pages/OptionPage";
import EndPage from "./Pages/EndPage";
import Level1Page from "../src/Pages/Level1Page";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/avatar" element={<AvatarPage />} />
                <Route path="/levels" element={<LevelsPage />} />
                <Route path="/level1" element={<Level1Page />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/option" element={<OptionPage />} />
                <Route path="/results2" element={<ResultsPage2 />} />
                <Route path="/end" element={<EndPage />} />
            </Routes>
        </Router>
    );
}

export default App;
