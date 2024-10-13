// import React from "react";
// import './App.css';
// import './styles.css';
// import StartPage from "./Pages/StartPage";
// import AvatarPage from './Pages/AvatarPage';  // Avatar page component
// import LevelsPage from './Pages/LevelsPage';  // Level page component
// import { useState } from "react";

// function App() {
//   const [page,setPage] = useState('start')

//   return (
//     // <StartPage></StartPage>
//     <div>
//       {page === 'start' && <StartPage onStart = {() => setPage('avatar')}/>}
//       {page === 'avatar' && <AvatarPage onAvatarSelect={() => setPage('levels')} />}
//       {page === 'levels' && <LevelsPage />}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import StartPage from "./Pages/StartPage";
import AvatarPage from "./Pages/AvatarPage";
import LevelsPage from "./Pages/LevelsPage";
import ResultsPage from "./Pages/ResultsPage";
import Level1Page from "./Pages/Level1Page";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/avatar" element={<AvatarPage />} />
                <Route path="/levels" element={<LevelsPage />} />
                <Route path="/level1" element={<Level1Page />} />
                <Route path="/results" element={<ResultsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
