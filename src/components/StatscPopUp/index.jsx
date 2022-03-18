import { Typography } from '@mui/material';
import React from 'react';
import { useStatsContext } from '../../contexts/statsController';
import PopupContainer from '../PopUpContainer';
import ClockSection from './ClockSection';
import StatsHistgram from './StatsHistogram';
import StatsRow from './StatsRow';


const StatsPopUp = (props) => {
    const [stats] = useStatsContext();

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