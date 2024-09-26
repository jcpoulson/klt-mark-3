import { useState } from 'react';
import styles from "./scroll.module.css";
import { Fab } from '@mui/material';
import { CropOriginal, FlipCameraAndroid, RoomPreferences, SkipNext } from '@mui/icons-material';
// @ts-expect-error switch to TS
import getRandomPhoto from '../../backend/getRandomPhoto';

type Props = {
    saying: string;
    answer: string;
    refresh: () => void;
    setPhoto: (arg: any) => void;
}

const FlashCardMk2: React.FC<Props> = ({ saying, answer, refresh, setPhoto }) => {
    const [seeThroughMode, setSeeThroughMode] = useState(false);
    const [check, setCheck] = useState(false);

    function handleSeeThroughModeStatus() {
        if (seeThroughMode) {
            return {
                backgroundColor: "transparent",
                color: "white"
            }
        } else {
            return {
                backgroundColor: "white",
                color: "black"
            }
        }
    }


    return (
        <div className={styles.scroll} style={handleSeeThroughModeStatus()}>
            <div className={styles.frontButtons}>
                <Fab size='small' sx={{ margin: "5px"}}>
                    <RoomPreferences />
                </Fab>
                <Fab size='small' sx={{ margin: "5px"}} onClick={() => setSeeThroughMode(!seeThroughMode)}>
                    <CropOriginal />
                </Fab>
                <Fab size='small' sx={{ margin: "5px"}} onClick={() => setCheck(!check)}>
                    <FlipCameraAndroid />
                </Fab>
                <Fab size='small' sx={{ margin: "5px"}} onClick={() => {
                    refresh();
                    getRandomPhoto().then((res: any) => setPhoto(res))
                }}>
                    <SkipNext />
                </Fab>
            </div>
            {
                check === false ?
                <p style={seeThroughMode ? { backgroundColor: "rgb(0 0 0 / .5)", display: "inline-block" } : {}}>{saying}</p>
                :
                <p style={seeThroughMode ? { backgroundColor: "rgb(0 0 0 / .5)", display: "inline-block" } : {}}>{answer}</p>
            }
        </div>
    )
}

export default FlashCardMk2