import { useState, useEffect, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-expect-error switch to TS
import getRandomPhoto from '../../backend/getRandomPhoto';

import "../../App.css";
import "./Practice.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";

const LevelSelect: React.FC = () => {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(bgImage1);

    useEffect(() => {
        getRandomPhoto().then((res: SetStateAction<string>) => setPhoto(res));
    }, [])

    return (
        <div className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>

            <div className="select-card" onClick={() => navigate('/practice/1')}>
                <p className="practice-text">Level 1 - Legacy App Data</p>
            </div>

            <div className="select-card" onClick={() => navigate('/practice/2')}>
                <p className="practice-text">Level 2 - TTMIK & Grammar</p>
            </div>
            
            <div className="select-card" onClick={() => navigate('/practice/3')}>
                <p className="practice-text">Level 3 - Actual conversation data</p>
            </div>
                
        </div>
    )
}

export default LevelSelect;
