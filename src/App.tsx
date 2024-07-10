import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

// Page Components
import Home from './components/Home/Home.tsx';

// Components
import Header from "./components/Global/Header.tsx";
import LevelSelect from './components/Practice/LevelSelect';
import FlashCard from './components/Practice/FlashCard.tsx';
import Create from "./components/Create/Create.tsx";
import ChatStart from './components/Chat/ChatStart.tsx';
import AIFlashCard from './components/Chat/AIFlashCard.tsx';
import Photo from './components/Photo/Photo.tsx';
import Progress from './components/Progress/Progress.tsx';
import Session from './components/Practice/Session.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/select" element={<LevelSelect />} />
        <Route path="/practice/:level" element={<FlashCard />} />
        <Route path="/chat" element={<ChatStart />} />
        <Route path="/chat/:auto" element={<AIFlashCard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/progress" element={<Progress />} />
        {/* Maybe a session route/feature that does a 100 cards as part of a session */}
        <Route path="/session" element={<Session />} />
      </Routes>
    </div>
  );
}

export default App;