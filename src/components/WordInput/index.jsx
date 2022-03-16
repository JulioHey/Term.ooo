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

const WordInput = (props) => {
    const classes = useStyles();

    return (
        <Container
            classes={{
                root: classes.wordContainer
            }}
        >
            {props.wordInput.map((letter, index) => {
                return (<LetterSpan
                    key = {index}
                    letter = {letter}
                    currentTry = {props.currentTry}
                    status = {props.lettersStatus[index]}
                    fontSize = "25px"
                    margin = "2px"
                    currentIndex = {props.currentIndex === index}
                    onClick = {() => props.setCurrentIndex(index)}
                />)
            })}
        </Container>
    );
}

export default WordInput;