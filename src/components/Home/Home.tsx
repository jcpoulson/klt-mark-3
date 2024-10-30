import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import "../../App.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";
// @ts-expect-error switch to TS
import getRandomPhoto from '../../backend/getRandomPhoto';

import { Button } from "@mui/material";
// @ts-expect-error switch to TS
import { performMigration } from "../../backend/migration.js"

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(bgImage1);

    useEffect(() => {
        getRandomPhoto().then((res: React.SetStateAction<string>) => setPhoto(res));
    }, [])

  return (
      <header className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="home-text-card">
          <p>Hello There, Welcome to KLT - Mark VI</p>
        </div>
        <div className="home-text-card">
          <p>안녕하세요, 한국어 훈련자 예요</p>
        </div>

        <Button variant="contained" size="large" onClick={() => navigate('/select')}>Free Form Flash Cards</Button>
        <Button variant="contained" size="large" style={{ marginTop: "1%" }} onClick={() => navigate('/session')}>Start Session</Button>
        <Button variant="contained" size="large" style={{ marginTop: "1%" }} onClick={() => navigate('/create')}>Create</Button>
        <Button variant="contained" size="large" style={{ marginTop: "1%" }} onClick={() => navigate('/chat')}>Chat with AI</Button>
        {/* <Button variant="contained" size="large" style={{ marginTop: "1%" }} onClick={() => { 
          performMigration();
          console.log("Perform data migration");
          }
        }>
            Data Migration
        </Button> */}
      </header>
  )
}

export default Home;
