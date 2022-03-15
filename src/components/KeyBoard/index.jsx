import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useMemo } from 'react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

import LetterButton from '../LetterButton';


const useStyles = makeStyles((theme) => {
    return ({
        container: {
            display: "flex !important ",
            justifyContent: "center",
        }
    })
})

const KeyBoard = () => {
    const classes = useStyles();

    const keyboard = useMemo(() => {
        return [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
            ['a' ,'s' ,'d' ,'f' ,'g' ,'h' ,'j' ,'k' ,'l', 'backspace'],
            ['z' ,'x' ,'c' ,'v' ,'b' ,'n' ,'m', 'enter']
        ]
    }, [])

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
                                return (<LetterButton key={letter} margin={"3px 6px 3px 20px"}>
                                    <BackspaceOutlinedIcon />
                                </LetterButton>);
                            }
                            if (letter === 'enter') {
                                return (<LetterButton key={letter} margin={"3px 6px 3px 20px"} padding="10px 20px">
                                    {letter}
                                </LetterButton>);
                            }
                            return (
                            <LetterButton key={letter}>
                                {letter}
                            </LetterButton>
                            );
                        })}
                    </Container>
                )
            })}
        </Container>
    )
}

export default KeyBoard;