import React from 'react';
import { GameContextProvider } from '../../contexts/gameContext';
import { StatsContextProvider } from '../../contexts/statsController';
import BasePage from '../BasePage';


const Quarteto = (props) => {
    return (
        <GameContextProvider
            numberOfTries = {10}
            currentPage="quarteto"
        >
            <StatsContextProvider
                currentPage={"quarteto"}
            >
                <BasePage />
            </StatsContextProvider>
        </GameContextProvider>

    );
}

export default Quarteto;