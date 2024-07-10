import { useState, useEffect } from 'react';
import bgImage1 from "../../assets/img/korea-bg-1.jpg";
import ProgressItems from './ProgressItems';

// @ts-expect-error switch to TS
import getOtherPhoto from "../../backend/getOtherPhoto";
// @ts-expect-error switch to TS
import getCurrentProgress from "../../backend/progress/getCurrentProgress"

const Progress: React.FC = () => {
    const [photo, setPhoto] = useState(bgImage1);
    const [currentProgress, setCurrentProgress] = useState<any>({ currentCount: 0, goalCount: 0, value: "Blue"}); 

    useEffect(() => {
        getOtherPhoto().then((res: React.SetStateAction<string>) => setPhoto(res));
        getCurrentProgress().then((res: React.SetStateAction<string>) => setCurrentProgress(res))
    }, [])

    return (
        <header className="App-header" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className='home-text-card'>
                <ProgressItems currentProgressDecimal={currentProgress.currentCount / currentProgress.goalCount * 100} />
            </div>
      </header>
    )
}

export default Progress