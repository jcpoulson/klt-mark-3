import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';
import CurrentBelt from "../../assets/img/blue-belt-png.webp";

import StyledProgressBar from './StyledProgressBar';

const ProgressItems: React.FC<{ currentProgressDecimal: number }> = ({ currentProgressDecimal }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Current Belt
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Blue
                    </Typography>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={CurrentBelt}
                        title="Current Belt"
                    />
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        KLT Progress Tracker
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <StyledProgressBar variant="determinate" value={currentProgressDecimal} />
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Live Practice Tracker
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProgressItems