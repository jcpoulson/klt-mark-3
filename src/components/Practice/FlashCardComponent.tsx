/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-expect-error switch to TS
import getRandomPhoto from '../../backend/getRandomPhoto';
// @ts-expect-error switch to TS
import progressIncrement from "../../backend/progress/progressIncrement";

import "../../App.css";
import "./Practice.css";

import { Button, Fab } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    saying: any;
    answer: any;
    showAnswer: any;
    setShowAnswer: any;
    setPhoto: any;
    refresh: any;
    setEdit: any;
    handleDeleteOpen: any
    incrementSessionCount?: () => void;
}

const FlashCardComponent: React.FC<Props> = ({ saying, answer, showAnswer, setShowAnswer, setPhoto, refresh, setEdit, handleDeleteOpen, incrementSessionCount }) => {
  return (
    <>
        <div className="practice-text-card">
            <p className="practice-text">{saying}</p>
        </div>

            {
                showAnswer === true ?
                    <div className="practice-text-card">
                        <p className="practice-text">{answer}</p>
                    </div>
                :
                    null
            }

            <Button variant="contained" size="large" onClick={() => setShowAnswer(true)}>Check</Button>

            {
                showAnswer === true ?
                <div className="progress-items">
                    <Fab size="large" color="success" onClick={async () => {
                        getRandomPhoto().then((res: any) => setPhoto(res));
                        setShowAnswer(false);
                        if (incrementSessionCount) {
                            // @ts-ignore
                            incrementSessionCount()
                        }
                        await progressIncrement();
                        await refresh();
                    }}>
                        <CheckIcon />
                    </Fab>
                    <Fab size="large" color="error" onClick={async () => {
                        getRandomPhoto().then((res: any) => setPhoto(res));
                        setShowAnswer(false);
                        await refresh();
                    }}>
                        <CloseIcon />
                    </Fab>
                </div>
                :
                null
            }


            <div className="edit-and-delete">
                <Fab size="small" onClick={() => setEdit(true)}>
                    <EditIcon />
                </Fab>
                <Fab size="small" onClick={handleDeleteOpen}>
                    <DeleteIcon />
                </Fab>
            </div>
    </>
  )
}

export default FlashCardComponent;