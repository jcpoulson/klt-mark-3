/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-expect-error switch to TS
import getRandomPhoto from '../../backend/getRandomPhoto';

import "../../App.css";
import "./Chat.css";

import { Button } from "@mui/material";

type Props = {
    saying: any;
    answer: any;
    showAnswer: any;
    setShowAnswer: any;
    setPhoto: any;
    refresh: any;
}

const ChatComponent: React.FC<Props> = ({ saying, setShowAnswer, setPhoto, refresh }) => {
  return (
    <>
        <div className="chat-box">
            <div className="practice-text-card">
                <p className="practice-text">{saying}</p>
            </div>
            <div className="my-text-card">
                <p className="practice-text">{saying}</p>
            </div>
            <div className="practice-text-card">
                <p className="practice-text">{saying}</p>
            </div>
            <div className="my-text-card">
                <p className="practice-text">{saying}</p>
            </div>
            <div className="practice-text-card">
                <p className="practice-text">{saying}</p>
            </div>
            <div className="my-text-card">
                <p className="practice-text">{saying}</p>
            </div>
            <div className="practice-text-card">
                <p className="practice-text">{saying}</p>
            </div>
            <div className="my-text-card">
                <p className="practice-text">{saying}</p>
            </div>
        </div>


        <Button variant="contained" size="large" onClick={() => setShowAnswer(true)}>Check</Button>
        <Button variant="contained" size="large" style={{ marginTop: "1%" }} onClick={async () => {
            getRandomPhoto().then((res: any) => setPhoto(res));
            setShowAnswer(false);
            await refresh();
        }}>Next</Button>

    </>
  )
}

export default ChatComponent;