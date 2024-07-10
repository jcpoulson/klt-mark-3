
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


import { CircularProgress } from '@mui/material';

export interface SimpleDialogProps {
    open: boolean;
    handleClose: (arg: boolean) => void;
    sessionCount: number;
}
  
function SessionCard(props: SimpleDialogProps) {
    const { open, handleClose, sessionCount } = props;
    

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Current Session</DialogTitle>
            <div style={{ width: "400px", height: "300px", display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <CircularProgress variant="determinate" color='success' size={140} value={sessionCount} />
            </div>
            <DialogTitle sx={{ textAlign: "center"}}>Session Count: {sessionCount}</DialogTitle>
        </Dialog>
    );
}

export default SessionCard;