import { createContext, useContext, useReducer, useRef } from "react";
import { getCurrentDay } from "../../utils/getCurrentDay";
import { allLists } from "../../utils/listAwnser/allLists";
import { buildActions } from "./build_actions";
import { reducer } from "./reducer";

const GameContext = createContext();

export const initialState = (numberOfTries, currentPage) => {
    var day = getCurrentDay();

    var awnsers = allLists[`${currentPage}List`][day - 1];

    let index;
    let tries = [];

    for (index = 0; index < numberOfTries; index++)
    {
        tries.push(['','','','','']);
    }

    return {
        win: 0,
        currDay: day,
        currentPage: currentPage,
        currentInput: ['', '', '', '', ''], 
        tries: tries, 
        currentIndex: 0, 
        currentTry: 0, 
        gamesStatus: awnsers.map(_ => 100), 
        awnsers: awnsers,
        numberOfTries: numberOfTries
    }
};

export const GameContextProvider = ({
    children,
    currentPage,
    numberOfTries
}) => {
    const [state, dispatch] = useReducer(reducer ,initialState(numberOfTries, currentPage));

    const actions = useRef(buildActions(dispatch));

    return <GameContext.Provider value={[state, actions.current]}>{children}</GameContext.Provider>;
}

export const useGameContext = () => {
    const gameContext = useContext(GameContext);

    if (typeof gameContext === "undefined")
    {
        throw new Error("You have to use useGameContext inside a <GameContextProvider>");
    }

    return [...gameContext];
}