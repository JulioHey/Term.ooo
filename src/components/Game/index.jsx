import { Input } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import WordInput from '../WordInput';

const Game = (props) => {
    const [currentInput, setCurrentInput] = useState([" ", " ", " ", " ", " "])
    const [tries, setTries] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const letters = useMemo(() => {
        return ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ,
        'a' ,'s' ,'d' ,'f' ,'g' ,'h' ,'j' ,'k' ,'l', 'backspace',
        'z' ,'x' ,'c' ,'v' ,'b' ,'n' ,'m', 'enter'];
    }, [])

    const setInitialTries = useCallback(() => {
        var addingTries = [
            {
                wordInput: ["", "", "", "", ""],
                lettersStatus: ["none", "none", "none", "none", "none"]
            },
        ];

        for (let index = 1; index < props.numberOfTries; index++)
        {
            addingTries.push({
                wordInput: ["", "", "", "", ""],
                lettersStatus: ["disabled", "disabled", "disabled", "disabled", "disabled"]
            })
        }

        setTries(addingTries)
    }, [props.numberOfTries]);

    useEffect(() => {
        setInitialTries();
    }, [setInitialTries]);

    const handleInput =  useCallback((event, currentInput) => {
        const letter = event.target.value.split("").pop();
        if (currentIndex < 5)
        {
            currentInput[currentIndex] = letter;
            setCurrentInput(currentInput);
            setCurrentIndex(value => value + 1);
        }
    }, [
        currentIndex,
        setCurrentIndex,
        setCurrentInput
    ]);

    const handleKeyDown = useCallback((event) => {
        if (event.keyCode === 8)
        {
            currentInput[currentIndex] = " ";
            setCurrentInput(currentInput.slice(0,5));
            setCurrentIndex(value => value ? value - 1 : value);
        } else if (letters.includes(event.key)) 
        {  
            currentInput[currentIndex] = event.key;
            setCurrentInput(currentInput);
            setCurrentIndex(value => value < 5 ? value + 1 : value);
        } else if (
            event.keyCode === 13 
            && !currentInput.includes(" ")
            && props.numberOfCurrentTry < props.numberOfTries
        )
        {
            props.setCurrentTry(props.numberOfCurrentTry + 1)
            tries[props.numberOfCurrentTry] = {
                wordInput: currentInput,
                lettersStatus: ["disabled", "disabled", "disabled", "disabled", "disabled"]
            }
            tries[props.numberOfCurrentTry + 1] = {
                wordInput: ["", "", "", "", ""],
                lettersStatus: ["none", "none", "none", "none", "none"]
            }
            setCurrentInput(["", "", "", "", ""]);
            setTries(tries);
            setCurrentIndex(0);
        } else if (event.keyCode === 37 && currentIndex > 0 )
        {
            setCurrentIndex(currentIndex - 1);
        } else if (event.keyCode === 39 && currentIndex < 5 )
        {
            setCurrentIndex(currentIndex + 1);
        }
    }, [
        currentInput,
        letters,
        currentIndex,
        setCurrentInput,
        setCurrentIndex,
        props
    ]);

    return (
        <>
            <Input
                style = {{
                    opacity: "0"
                }}
                value = {currentInput.join("")}
                autoFocus = {true}
                onBlur={(event) => event.target.focus()}
                onKeyDown = {(event) => handleKeyDown(event)}
            />
            {tries.map((currentTry, index) => {
                if (props.numberOfCurrentTry === index) {
                    return (
                    <WordInput 
                        key={index}
                        wordInput = {currentInput}
                        lettersStatus = {currentTry.lettersStatus}
                        currentIndex = {currentIndex}
                        setCurrentIndex = {setCurrentIndex}
                    />);
                }
                return (
                    <WordInput
                        key={index}
                        wordInput = {currentTry.wordInput}
                        lettersStatus = {currentTry.lettersStatus}
                        currentIndex = {false}
                        setCurrentIndex = {() => {}}
                    />);
            })}  
        </>
    )
}

export default Game;