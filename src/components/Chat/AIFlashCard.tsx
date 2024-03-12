import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import "../../App.css";
import "../Practice/Practice.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";

import FlashCardComponent from '../Practice/FlashCardComponent.tsx';
import EditFlashCard from '../Create/EditFlashCard.tsx';
import DeleteModal from '../Create/DeleteModal.tsx';
import generateRandomSaying from '../../backend/AI/generateRandomSaying.ts';

const AIFlashCard: React.FC = () => {
    const { level } = useParams();
    
    const [saying, setSaying] = useState("Loading...");
    const [answer, setAnswer] = useState("Answer - In - Korean");
    const [photo, setPhoto] = useState(bgImage1);

    const [showAnswer, setShowAnswer] = useState(false);
    const [edit, setEdit] = useState(false);


    // Delete Modal
    const [deleteOpen, setDeleteOpen] = useState(false);
    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);

    useEffect(() => {
        generateRandomSaying().then(res => {
            setSaying(res.translation);
            setAnswer(res.sentence);
        })
    }, [level]);

    async function refresh() {
        const generatedSaying = await generateRandomSaying();
        setSaying(generatedSaying.translation);
        setAnswer(generatedSaying.sentence);
    }
    
    return (
        <div className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
            {
                edit ?
                    <EditFlashCard saying={saying} answer={answer} levelProp={level} />
                :
                    <FlashCardComponent saying={saying} answer={answer} showAnswer={showAnswer} setShowAnswer={setShowAnswer} setPhoto={setPhoto} refresh={refresh} setEdit={setEdit} handleDeleteOpen={handleDeleteOpen} />
            }
            <DeleteModal deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose} saying={saying} answer={answer} levelProp={level} />
        </div>
    )
}

export default AIFlashCard;