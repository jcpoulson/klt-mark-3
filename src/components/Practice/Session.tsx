import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// @ts-expect-error switch to TS
import getRandomSaying from "../../backend/db";
// import generateRandomSaying from '../../backend/AI/generateRandomSaying.ts';

import "../../App.css";
import "./Practice.css";
import bgImage1 from "../../assets/img/korea-bg-1.jpg";

import FlashCardComponent from './FlashCardComponent.tsx';
import EditFlashCard from '../Create/EditFlashCard.tsx';
import DeleteModal from '../Create/DeleteModal.tsx';
import SessionCard from './SessionCard.tsx';

import { Fab } from '@mui/material';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

const Session: React.FC = () => {
    const { level } = useParams();
    
    const [saying, setSaying] = useState("Term - Saying - Expression");
    const [answer, setAnswer] = useState("Answer - In - Korean");
    const [photo, setPhoto] = useState(bgImage1);

    const [showAnswer, setShowAnswer] = useState(false);
    const [edit, setEdit] = useState(false);

    const [sessionCount, setSessionCount] = useState(0);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const incrementSessionCount = () => {
        setSessionCount(sessionCount + 1);
    }

    // Delete Modal
    const [deleteOpen, setDeleteOpen] = useState(false);
    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);

    // async function getSessionItem() {
    //     // const possibleGroupings = [getRandomSaying, generateRandomSaying];
    //     // const possibleGroupings = [getRandomSaying] // For the time being, the AI cards are not important
    //     // const selectedFunction = possibleGroupings[Math.floor(Math.random() * possibleGroupings.length)];
        
    //     // if (selectedFunction.name === "getRandomSaying") {
    //     //     const randomLevel = ["2", "3"][Math.floor(Math.random() * 2)];
    //     //     const calledFunction = await selectedFunction(randomLevel);
    //     //     return calledFunction
    //     // } else {
    //     //     const calledFunction = await selectedFunction();
    //     //     const formattedAiResponse = {
    //     //         english: calledFunction.translation,
    //     //         korean: calledFunction.sentence,
    //     //         level: "AI"
    //     //     }
    //     //     return formattedAiResponse;
    //     // }

    //     const randomLevel = ["2", "3"][Math.floor(Math.random() * 2)];
    //     const calledFunction = await getRandomSaying(randomLevel);
    //     return calledFunction
    // }

    useEffect(() => {
        getRandomSaying(["2", "3"][Math.floor(Math.random() * 2)]).then((res: { english: any; korean: any; }) => {
            setSaying(res.english);
            setAnswer(res.korean);
        })
    }, [level]);

    async function refresh() {
        getRandomSaying(["2", "3"][Math.floor(Math.random() * 2)]).then((res: { english: any; korean: any; }) => {
            setSaying(res.english);
            setAnswer(res.korean);
        })
    }
    
    return (
        <div className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
            <Fab size="small" onClick={handleClickOpen}>
                <SportsHandballIcon />
            </Fab>
            <SessionCard open={open} handleClose={handleClose} sessionCount={sessionCount} />
            {
                edit ?
                    <EditFlashCard saying={saying} answer={answer} levelProp={level} />
                :
                    <FlashCardComponent saying={saying} answer={answer} showAnswer={showAnswer} setShowAnswer={setShowAnswer} setPhoto={setPhoto} refresh={refresh} setEdit={setEdit} handleDeleteOpen={handleDeleteOpen} incrementSessionCount={incrementSessionCount} />
            }
            <DeleteModal deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose} saying={saying} answer={answer} levelProp={level} />
        </div>
    )
}

export default Session;