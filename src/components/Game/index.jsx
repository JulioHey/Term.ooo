import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { CreatePattern, patternMap } from '../../utils/pattern';
import WordInput from '../WordInput';


const useStyles = makeStyles((theme) => {
    return {
        gameContainer: {
            display: "flex !important",
            flexDirection: "column"
        }
    }
});

const Game = ({
    tries,
    numberOfCurrentTry,
    currentIndex,
    setCurrentIndex,
    currentInput,
    awnser,
    winIndex
}) => {
    const classes = useStyles();
    const [patterns, setPatterns] = useState([]);

    const generateInitialPatterns = useCallback(() => {
        var initialPatterns = [];

        tries.forEach(() => {
            initialPatterns.push(["disabled", "disabled", "disabled", "disabled", "disabled"])
        });

        setPatterns(initialPatterns);
    }, [
        tries
    ])

    useEffect(() => {
        generateInitialPatterns();
    }, [generateInitialPatterns]);

    const getWordInputPattern = useCallback((wordInput) => {
        const patterClass = new CreatePattern(awnser, wordInput.join(""));

        const patternColor = patterClass.definyPattern();

        return patternColor.map((color) => patternMap[color]);
    }, [
        awnser
    ]);

    return (
        <Container
            classes={{
                root: classes.gameContainer
            }}
        >
            {patterns.length ? tries.map((currentTry, index) => {
                if (index > winIndex) {
                    return (<WordInput
                        key={index}
                        wordInput={["","","","",""]}
                        lettersStatus={["disabled","disabled","disabled","disabled","disabled"]}
                        currentIndex={false}
                        setCurrentIndex={() => {}}
                        currentPage={tries.length === 10 ? "quarteto" : ""}
                    />);
                }
                else if (numberOfCurrentTry > index) {
                    return (
                        <WordInput
                            key={index}
                            wordInput={currentTry}
                            lettersStatus={getWordInputPattern(currentTry)}
                            currentIndex={currentIndex}
                            setCurrentIndex={() => {}}
                            currentPage={tries.length === 10 ? "quarteto" : ""}
                        />);
                }
                if (numberOfCurrentTry === index) {
                    return (
                        <WordInput
                            key={index}
                            wordInput={currentInput}
                            lettersStatus={["none", "none", "none", "none", "none"]}
                            currentIndex={currentIndex}
                            setCurrentIndex={setCurrentIndex}
                            currentTry = {true}
                            currentPage={tries.length === 10 ? "quarteto" : ""}
                        />);
                }
                return (
                    <WordInput
                        key={index}
                        wordInput={currentTry}
                        lettersStatus={patterns[index]}
                        currentIndex={false}
                        setCurrentIndex={() => { }}
                        currentPage={tries.length === 10 ? "quarteto" : ""}
                    />);
            }) : ""}
        </Container>
    )
}

export default Game;