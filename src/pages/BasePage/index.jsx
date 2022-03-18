import { Container, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TermAppBar from '../../components/AppBar';
import Game from '../../components/Game';
import KeyBoard from '../../components/KeyBoard';
import { useGameContext } from '../../contexts/gameContext';
import { useStatsContext } from '../../contexts/statsController';
import { getCurrentDay } from '../../utils/getCurrentDay';

const useStyles = makeStyles((theme) => {
    return {
        gamesContainer: {
            display: "flex !important",
            flexDirection: "row",
            flexShrink: "auto"
        }
    }
});


const BasePage = () => {
    const [state, actions] = useGameContext();
    const [statsState, statsActions] = useStatsContext();
    const classes = useStyles();

    const [alerted, setAlerted] = useState(false);

    useEffect(() => {
        const day = getCurrentDay();

        const oldState = JSON.parse(localStorage.getItem(state.currentPage));
        const oldStat = JSON.parse(localStorage.getItem(`${state.currentPage}Stats`));

        if (oldState && oldState.currDay && oldState.currDay === day) actions.setState(oldState);
        if (oldStat) statsActions.setState(oldStat);
    }, [])

    const letters = useMemo(() => {
        return ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Backspace',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter', 'ArrowLeft', 'ArrowRight'];
    }, []);

    const onInputBlur = useCallback((event) => {
        setTimeout(() => {
            if (event && event.target) event.target.focus();
        }, 0);
    }, []);

    useEffect(() => {
        // PERDEU
        if (state.win === 1)
        {
            statsActions.addGame( {currentTry: 100}, statsState);
        }
        // GANHO
        if (state.win === 2)
        {
            statsActions.addGame({currentTry: state.currentTry - 1}, statsState);
        }
    }, [state.win])

    const handleKeyDown = useCallback((event) => {
        if (!letters.includes(event.key)) return;

        actions.handleKeyDown(event.key, state);

    }, [
        state,
        actions,
        letters
    ]);


    const games = useMemo(() => {
        if (Object.keys(state.tries).length) {
            return (
                state.awnsers.map((awnser, index) => {
                    return (
                        <Game
                            key={index}
                            awnser={awnser}
                            winIndex={state.gamesStatus[index]}
                        />
                    )
                })
            );
        }
        return <></>
    }, [
        state.currentTry,
        state.gamesStatus,
        state.tries,
        state.awnsers,
    ]);

    const alertD = useCallback(() => {
        if (state.gamesStatus.filter((x) => x <= state.numberOfTries).length === state.awnsers.length) {
            setAlerted(true);

        }
    }, [
        state.gamesStatus,
        state.awnsers,
        state.numberOfTries
    ]);


    return (
        <>
            <TermAppBar
                currentPage={state.currentPage}
            />
            <Input
                style={{
                    opacity: "0",
                    position: "absolute"
                }}
                value={state.currentInput.join("")}
                autoFocus={true}
                onBlur={(event) => onInputBlur(event)}
                onKeyDown={(event) => handleKeyDown(event)}
                disabled={state.gamesStatus.filter(status => status !== 100).length === state.awnsers.length}
            />
            <Container
                classes={{
                    root: classes.gamesContainer
                }}
            >
                {games}
            </Container>
            {!alerted ? alertD() : <></>}
            <KeyBoard />
        </>
    );
}

export default BasePage;
