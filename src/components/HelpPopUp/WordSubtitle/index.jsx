import React from 'react';
import TextBody from '../TextBody';
import LetterSpan from '../../LetterSpan';

const WordSubtitle = (props) => {
    return (
        <TextBody>
            A letra
            <LetterSpan
                status={props.status}
                letter={props.letter}
            />
            {props.finalText}
        </TextBody>
    );
}

export default WordSubtitle;