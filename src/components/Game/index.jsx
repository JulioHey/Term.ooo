import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { useGameContext } from '../../contexts/gameContext';
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
    awnser,
    winIndex
}) => {
    const [state] = useGameContext();

    const classes = useStyles();
    const [patterns, setPatterns] = useState([]);

    const generateInitialPatterns = useCallback(() => {
        var initialPatterns = [];

        state.tries.forEach(() => {
            initialPatterns.push(["disabled", "disabled", "disabled", "disabled", "disabled"])
        });

        setPatterns(initialPatterns);
    }, [
        state.tries
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
            {patterns.length ? state.tries.map((currentTry, index) => {
                
                if (index > winIndex) {
                    return (<WordInput
                        key={index}
                        wordInput={["","","","",""]}
                        lettersStatus={["disabled","disabled","disabled","disabled","disabled"]}
                        wordIndex={index}
                    />);
                }
                else if (state.currentTry > index) {
                    return (
                        <WordInput
                            key={index}
                            wordInput={currentTry}
                            wordIndex={index}
                            lettersStatus={getWordInputPattern(currentTry)}
                        />);
                }
                if (state.currentTry === index) {
                    return (
                        <WordInput
                            key={index}
                            wordInput={state.currentInput}
                            wordIndex={index}
                            lettersStatus={["none", "none", "none", "none", "none"]}
                        />);
                }
                return (
                    <WordInput
                        key={index}
                        wordInput={currentTry}
                        wordIndex={index}
                        lettersStatus={patterns[index]}
                    />);
            }) : ""}
        </Container>
    )
}

export default Game;