import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useMemo, useState } from 'react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

import KeyBoardLetter from './KeyBoardLetter';
import KeyBoardStylesConstructor from './stylesConstructor';


const useStyles = makeStyles((theme) => {
    return ({
        keyBoardContainer: {
            position: "absolute !important",
            bottom: "0 !important"
        },
        container: {
            display: "flex !important ",
            justifyContent: "center",
        }
    })
})

const KeyBoard = ({
    currentPage,
    awnsers,
    tries
}) => {
    const classes = useStyles();

    const [keyBoardStylesConstructor] = useState(new KeyBoardStylesConstructor(currentPage));

    const keyLetterStyles = useMemo(() => {
        return keyBoardStylesConstructor.stylesLettersForCurrentPage();
    }, [
        currentPage, 
        keyBoardStylesConstructor
    ]);

    const backspaceStyles = useMemo(() => {
        return keyBoardStylesConstructor.stylesBackspaceForCurrentPage();
    }, [
        currentPage, 
        keyBoardStylesConstructor
    ]);

    const enterStyles = useMemo(() => {
        return keyBoardStylesConstructor.stylesEnterForCurrentPage();
    }, [
        currentPage, 
        keyBoardStylesConstructor
    ]);

    const keyboard = useMemo(() => {
        return [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
            ['a' ,'s' ,'d' ,'f' ,'g' ,'h' ,'j' ,'k' ,'l', 'backspace'],
            ['z' ,'x' ,'c' ,'v' ,'b' ,'n' ,'m', 'enter']
        ]
    }, []);

    return (
        <Container
            classes={{
                root: classes.keyBoardContainer
            }}
        >
            {keyboard.map((line) => {
                return (
                    <Container 
                        key={line}
                        classes={{
                            root: classes.container
                        }}
                    >
                        {line.map((letter) => {
                            if (letter === 'backspace') {
                                return (
                                <KeyBoardLetter 
                                    key={letter}
                                    awnsers={awnsers}
                                    tries={tries}
                                    currentPage={currentPage}
                                    width = {backspaceStyles.width}
                                    height = {backspaceStyles.height}
                                    fontSize = {backspaceStyles.fontSize}
                                    margin = {backspaceStyles.margin}
                                >
                                    <BackspaceOutlinedIcon />
                                </KeyBoardLetter>);
                            }
                            if (letter === 'enter') {
                                return (
                                <KeyBoardLetter 
                                    key={letter}
                                    awnsers={awnsers}
                                    tries={tries}
                                    currentPage={currentPage}
                                    width = {enterStyles.width}
                                    height = {enterStyles.height}
                                    fontSize = {enterStyles.fontSize}
                                    margin = {enterStyles.margin}
                                >
                                    {letter}
                                </KeyBoardLetter>);
                            }
                            return (
                            <KeyBoardLetter 
                                key={letter}
                                awnsers={awnsers}
                                tries={tries}
                                currentPage={currentPage}
                                width = {keyLetterStyles.width}
                                height = {keyLetterStyles.height}
                                fontSize = {keyLetterStyles.fontSize}
                            >
                                {letter}
                            </KeyBoardLetter>
                            );
                        })}
                    </Container>
                )
            })}
        </Container>
    )
}

export default KeyBoard;