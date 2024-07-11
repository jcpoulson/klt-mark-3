/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// @ts-expect-error switch to TS
import postSaying from "../../backend/postSaying";
// @ts-expect-error switch to TS
import getRandomPhoto from '../../backend/getRandomPhoto';
// @ts-expect-error switch to TS
import uploadPhoto from "../../backend/uploadPhoto";

import "../../App.css";
import styles from "./photo.module.css"
import bgImage1 from "../../assets/img/korea-bg-1.jpg";
import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const Photo = () => {
    // const navigate = useNavigate();

    const [photo, setPhoto] = useState(bgImage1);
    const [file, setFile] = useState<File>();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null; // Get the first selected file or null

        if (file) {
            const newObjectUrl = URL.createObjectURL(file);
            setPhoto(newObjectUrl);
            setFile(file);
        }
      };

    return (
        <header className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
                <Button
                    component="label"
                    variant="contained"
                    color="secondary"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file
                    <input type='file' className={styles.visuallyHiddenInput} onChange={handleFileChange} />
                </Button>

            <Button variant="contained" size="large" style={{ marginTop: "1%" }} onClick={() => {
                uploadPhoto(file, file?.name);
                alert("Photo uploaded");
            }}>Submit</Button>
        </header>
    )
}

export default Photo;