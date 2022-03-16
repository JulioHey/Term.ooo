import { Container, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TermAppBar from '../../components/AppBar';
import Game from '../../components/Game';
import KeyBoard from '../../components/KeyBoard';
import InputController from './gameController';

const useStyles = makeStyles((theme) => {
    return {
        gamesContainer: {
            display: "flex !important",
            flexDirection: "row",
            flexShrink: "auto"
        }
    }
});


const BasePage = ({
    currentPage,
    awnsers,
    numberOfTries
}) => {
    const classes = useStyles();

    const [currentInput, setCurrentInput] = useState(["", "", "", "", ""])
    const [tries, setTries] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTry, setCurrentTry] = useState(0);
    const [gamesStatus, setGamesStatus] = useState([]);
    const [alerted, setAlerted] = useState(false);

    const letters = useMemo(() => {
        return ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Backspace',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter'];
    }, []);

    const setInitialTries = useCallback(() => {
        var addingTries = [
            ["", "", "", "", ""]
        ];

        for (let index = 1; index < numberOfTries; index++) {
            addingTries.push(["", "", "", "", ""])
        }

        setTries(addingTries);
    }, [
        numberOfTries
    ]);

    useEffect(() => {
        setInitialTries();
    }, [setInitialTries]);

    const onInputBlur = useCallback((event) => {
        // gamesStatus.filter(status => status).length === awnsers.length ?? event.target.focus()
        setTimeout(() => {
            event.target.focus();
        }, 0);
    })

    const handleKeyDown = useCallback((event) => {
        if (!letters.includes(event.key)) return;
        const inputController = new InputController({
            currentInput,
            tries,
            currentIndex,
            currentTry,
            gamesStatus,
            awnsers
        });

        const {
            newCurrentInput,
            newTries,
            newCurrentIndex,
            newCurrentTry,
            newGamesStatus,
        } = inputController.handleInput(event.key);

        setCurrentIndex(newCurrentIndex);
        setCurrentInput(newCurrentInput);
        setTries(newTries);
        setCurrentTry(newCurrentTry);
        setGamesStatus(newGamesStatus);
    }, [
        currentInput,
        tries,
        currentIndex,
        currentTry,
        gamesStatus,
        awnsers
    ]);


    const games = useMemo(() => {
        if (Object.keys(tries).length) {
            return (
                awnsers.map((awnser, index) => {
                    return (
                        <Game
                            key={index}
                            awnser={awnser}
                            tries={tries}
                            numberOfCurrentTry={currentTry}
                            currentIndex={currentIndex}
                            setCurrentIndex={setCurrentIndex}
                            currentInput={currentInput}
                            gamesStatus={gamesStatus[index]}
                            winIndex={gamesStatus[index]}
                        />
                    )
                })
            );
        }
        return <></>
    }, [
        awnsers,
        currentInput,
        tries,
        currentTry,
        currentIndex,
        setCurrentIndex,
        gamesStatus
    ]);

    const alertD = useCallback(() => {
        if (gamesStatus.filter((x) => x <= numberOfTries).length === awnsers.length) {
            setAlerted(true);
            console.log("PORRA");

        }
    }, [gamesStatus]);


    return (
        <>
            <TermAppBar
                currentPage={currentPage}
            />
            <Input
                style={{
                    opacity: "0",
                    position: "absolute"
                }}
                value={currentInput.join("")}
                autoFocus={true}
                onBlur={(event) => onInputBlur(event)}
                onKeyDown={(event) => handleKeyDown(event)}
                disabled={gamesStatus.filter(status => status).length === awnsers.length}
            />
            <Container
                classes={{
                    root: classes.gamesContainer
                }}
            >
                {games}
            </Container>
            {!alerted ? alertD() : <></>}
            <KeyBoard
                currentPage={currentPage}
                tries={tries ?? []}
                awnsers={awnsers}
            />
        </>
    );
}

export default BasePage;
