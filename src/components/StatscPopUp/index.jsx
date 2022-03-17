import { Typography } from '@mui/material';
import React from 'react';
import PopupContainer from '../PopUpContainer';
import ClockSection from './ClockSection';
import StatsHistgram from './StatsHistogram';
import StatsRow from './StatsRow';


const StatsPopUp = (props) => {
    const stats = {
        games: 3,
        wins: 3,
        maxWinStreak: 3,
        currWinStreak: 3,
        histogram: [
            0,
            0,
            1,
            2,
            0,
            0
        ] 
    };

    const status = {
        curRow: 3,
        curTry: ["m", "o", "l", "a", "s"],
        curday: 74,
        gameOver: 1,
        invalids: [],
        normSolution: "molas",
        solution: "molas",
        tries: [["s", "e", "r", "a", "o"], ["c", "u", "p", "i", "m"], ["t", "o", "m", "a", "s"]],
        won: 1,
    };

    return (
        <PopupContainer
            open={props.open}
            handleClose={props.handleClose}
        >
            <Typography
                color="#FAFAFF"
                fontSize="25px"
                fontWeight={500}
                textAlign = "center"
            >
                progresso
            </Typography>
            <StatsRow 
                wins={stats.histogram.reduce((sum, value) => sum += value)}
                games={stats.games}
                currWinStreak={stats.currWinStreak}
                maxWinStreak={stats.maxWinStreak}
            />
            <Typography
                color="#FAFAFF"
                fontSize="25px"
                fontWeight={500}
                textAlign = "center"
            >
                distribuição de tentativas
            </Typography>
            <StatsHistgram
                games = {stats.games}
                histogram={stats.histogram}
            />
            {stats.games ? <ClockSection /> : <></>}
        </PopupContainer>
    )
}


export default StatsPopUp;