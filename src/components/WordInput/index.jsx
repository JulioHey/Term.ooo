import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import LetterSpan from '../LetterSpan';

const useStyles = makeStyles((theme) => {
    return {
        wordContainer: {
            display: "flex !important",
            justifyContent: "center",
        }
    }
});

const WordInput = ({
    wordInput,
    wordIndex,
    lettersStatus,
}) => {
    const classes = useStyles();

    return (
        <Container
            classes={{
                root: classes.wordContainer
            }}
        >
            {wordInput.map((letter, index) => {
                return (<LetterSpan
                    key = {index}
                    letterIndex = {index}
                    wordIndex = {wordIndex}
                    letter = {letter}
                    status = {lettersStatus[index]}
                    margin = "2px"
                />)
            })}
        </Container>
    );
}

export default WordInput;