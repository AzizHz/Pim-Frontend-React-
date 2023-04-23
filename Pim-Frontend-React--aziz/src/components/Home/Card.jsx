import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import pic from '../../assets/Card.png'
import { Stack } from '@mui/material';
import "./Card.css"

export default function MediaControlCard() {
    const theme = useTheme();

    return (
        <Stack direction={'row'} >
            <div className='image-card-wraper'>
                <div className='image-card-container'></div>

            </div>
            <div className='disc-container'>
                <h3>Pick Your Squad</h3>
                <p>Use your budget of 1000 OOP to pick a squad of 5 players from the NBA League.</p>
            </div>

        </Stack>
    );
}