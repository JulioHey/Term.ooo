import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useMemo } from 'react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

import KeyBoardLetter from './KeyBoardLetter';


const useStyles = makeStyles((theme) => {
    return ({
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

    const keyboard = useMemo(() => {
        return [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
            ['a' ,'s' ,'d' ,'f' ,'g' ,'h' ,'j' ,'k' ,'l', 'backspace'],
            ['z' ,'x' ,'c' ,'v' ,'b' ,'n' ,'m', 'enter']
        ]
    }, []);

    return (
        <Container
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
                                    margin={"3px 6px 3px 20px"}
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
                                    margin={"3px 6px 3px 20px"} 
                                    padding="10px 20px"
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