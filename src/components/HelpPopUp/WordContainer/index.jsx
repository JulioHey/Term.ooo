import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import LetterSpan from '../../LetterSpan';


const useStyles = makeStyles((theme) => {
    return {
        wordContainer: {
            display: "flex !important",
            margin: "10px 0"
        }
    }
});

const WordContainer = (props) => {
    const classes = useStyles();
    return (
        <Container
            classes={{
                root: classes.wordContainer
            }}
        >
            {(props.word).split("").map((letter) => {
                return (
                    <LetterSpan
                        key = {letter}
                        letter={letter}
                        status={(letter === props.letter) ? props.status : "none"}
                    />
                )
            })}
        </Container>
    );
}

export default WordContainer;