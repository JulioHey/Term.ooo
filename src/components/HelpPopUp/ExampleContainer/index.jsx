import React from 'react';
import WordContainer from '../WordContainer';
import WordSubtitle from '../WordSubtitle';


const ExampleContainer = (props) => {
    return (
        <>
            <WordContainer
                word = {props.word}
                status = {props.status}
                letter = {props.letter}
            />
            <WordSubtitle
                letter={props.letter}
                status = {props.status}
                finalText= {props.finalText}
            />
        </>
    );
}

export default ExampleContainer;