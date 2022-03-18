import React from 'react';
import { GameContextProvider } from '../../contexts/gameContext';
import { StatsContextProvider } from '../../contexts/statsController';
import BasePage from '../BasePage';


const Termo = () => {
    return (
        <GameContextProvider
            numberOfTries = {6}
            currentPage="termo"
        >
            <StatsContextProvider
                currentPage={"termo"}
            >
                <BasePage />
            </StatsContextProvider>
        </GameContextProvider>

    );
}

export default Termo;