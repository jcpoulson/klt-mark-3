import { useState, useEffect, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-expect-error switch to TS
import getRandomPhoto from '../../backend/getRandomPhoto';

import "../../App.css";
import "./Chat.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";

const ChatStart: React.FC = () => {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(bgImage1);

    useEffect(() => {
        getRandomPhoto().then((res: SetStateAction<string>) => setPhoto(res));
    }, [])

    return (
        <div className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>

            <div className="select-card" onClick={() => navigate('/chat/convo')}>
                <p className="practice-text">Chat With AI</p>
            </div>

            <div className="select-card" onClick={() => navigate('/chat/auto')}>
                <p className="practice-text">AI Generated Flash Cards</p>
            </div>
                
        </div>
    )
}

export default ChatStart;