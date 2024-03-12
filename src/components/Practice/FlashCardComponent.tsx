/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-expect-error switch to TS
import getRandomPhoto from '../../backend/getRandomPhoto';

import "../../App.css";
import "./Practice.css";

import { Button, Fab } from "@mui/material";
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
}

const FlashCardComponent: React.FC<Props> = ({ saying, answer, showAnswer, setShowAnswer, setPhoto, refresh, setEdit, handleDeleteOpen }) => {
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
            <Button variant="contained" size="large" style={{ marginTop: "1%" }} onClick={async () => {
                getRandomPhoto().then((res: any) => setPhoto(res));
                setShowAnswer(false);
                await refresh();
            }}>Next</Button>


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