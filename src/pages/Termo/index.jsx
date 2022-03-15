import React, { useState } from 'react';
import Game from '../../components/Game';
import BasePage from '../BasePage';


const Termo = (props) => {
    const [currentTry, setCurrentTry] = useState(0);

    return (
        <BasePage currentPage="termo">
            <Game 
                numberOfTries = {6}
                numberOfCurrentTry = {currentTry}
                setCurrentTry = {setCurrentTry}
            />
        </BasePage>
    );
}

export default Termo;