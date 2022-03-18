import { createContext, useContext, useReducer, useRef } from "react";
import { buildActions } from "./build_actions";
import { reducer } from "./reducer";


const StatsContext = createContext();

export const initialState = (currentPage) => {
    return {
        currentPage: currentPage,
        games: 0,
        wins: 0,
        maxWinStreak: 0,
        currWinStreak: 0,
        histogram: [
            0,
            0,
            0,
            0,
            0,
            0
        ] 
    }
};

export const StatsContextProvider = ({
    children,
    currentPage
}) => {
    const [state, dispatch] = useReducer(reducer, initialState(currentPage));
    const actions = useRef(buildActions(dispatch));

    return <StatsContext.Provider value={[state, actions.current]}>{children}</StatsContext.Provider>
}

export const useStatsContext = () => {
    const statsContext = useContext(StatsContext);

    if (typeof statsContext === "undefined")
    {
        throw new Error("You have to use useStatsContext inside a <StatsContextProvider>");
    }

    return [...statsContext];
}