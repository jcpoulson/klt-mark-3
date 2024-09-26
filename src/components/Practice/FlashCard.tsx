import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// @ts-expect-error switch to TS
import getRandomSaying from "../../backend/db";

import "../../App.css";
import "./Practice.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";

// import FlashCardComponent from './FlashCardComponent.tsx';
import EditFlashCard from '../Create/EditFlashCard.tsx';
import DeleteModal from '../Create/DeleteModal.tsx';
import FlashCardMk2 from './FlashCardMk2.tsx';

const FlashCard: React.FC = () => {
    const { level } = useParams();
    
    const [saying, setSaying] = useState("Term - Saying - Expression");
    const [answer, setAnswer] = useState("Answer - In - Korean");
    const [photo, setPhoto] = useState(bgImage1);

    // const [showAnswer, setShowAnswer] = useState(false);
    const [edit] = useState(false);


    // Delete Modal
    const [deleteOpen, setDeleteOpen] = useState(false);
    // const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);

    useEffect(() => {
        getRandomSaying(level).then((res: { english: any; korean: any; }) => {
            setSaying(res.english);
            setAnswer(res.korean);
        })
    }, [level]);

    async function refresh() {
        getRandomSaying(level).then((res: { english: any; korean: any; }) => {
            setSaying(res.english);
            setAnswer(res.korean);
        })
    }
    
    return (
        <div className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
            {
                edit ?
                    <EditFlashCard saying={saying} answer={answer} levelProp={level} />
                :
                    // <FlashCardComponent saying={saying} answer={answer} showAnswer={showAnswer} setShowAnswer={setShowAnswer} setPhoto={setPhoto} refresh={refresh} setEdit={setEdit} handleDeleteOpen={handleDeleteOpen} />
                    <FlashCardMk2 saying={saying} answer={answer} refresh={refresh} setPhoto={setPhoto} />
            }
            <DeleteModal deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose} saying={saying} answer={answer} levelProp={level} />
        </div>
    )
}

export default FlashCard;