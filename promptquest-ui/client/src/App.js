import React from "react";
import './App.css';
import './styles.css';
import StartPage from "./Pages/StartPage";
import AvatarPage from './Pages/AvatarPage';  // Avatar page component
import LevelsPage from './Pages/LevelsPage';  // Level page component
import { useState } from "react";

function App() {
  const [page,setPage] = useState('start')

  return (
    // <StartPage></StartPage>
    <div>
      {page === 'start' && <StartPage onStart = {() => setPage('avatar')}/>}
      {page === 'avatar' && <AvatarPage onAvatarSelect={() => setPage('levels')} />}
      {page === 'levels' && <LevelsPage />}
    </div>
  );
}

export default App;
