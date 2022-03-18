import * as actionTypes from './actions_types';

export const buildActions = (dispatch) => {
    return {
        addGame: (payload, oldState) => addGame(payload, oldState, dispatch),
        setState: (payload) => dispatch({type: actionTypes.SET_STATE, payload}),
    }
}

const addGame = (payload, oldState, dispatch) => {
    if (payload.currentTry !== 100)
    {
        const endGameIndex = payload.currentTry;
    
        oldState.histogram[endGameIndex] += 1;
        oldState.wins += 1;
        oldState.currWinStreak += 1;
    }

    if (oldState.currWinStreak >= oldState.maxWinStreak)
    {
        oldState.maxWinStreak = oldState.currWinStreak;
    }

    oldState.games += 1;

    localStorage.setItem(`${oldState.currentPage}Stats`, JSON.stringify(oldState));

    dispatch({type: actionTypes.ADD_GAME, oldState});
}