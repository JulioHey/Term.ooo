import React from 'react';
import { GameContextProvider } from '../../contexts/gameContext';
import { StatsContextProvider } from '../../contexts/statsController';
import BasePage from '../BasePage';


const Dueto = () => {
    return (
        <GameContextProvider
            numberOfTries = {7}   
            currentPage="dueto"
        >
            <StatsContextProvider
                currentPage={"dueto"}
            >
                <BasePage />
            </StatsContextProvider>
        </GameContextProvider>
    );
}

export default Dueto;