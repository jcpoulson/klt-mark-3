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
//import ChatContainer from './components/Chat/ChatContainer.tsx';

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
      </Routes>
    </div>
  );
}

export default App;