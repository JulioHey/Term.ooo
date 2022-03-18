import * as actionTypes from './actions_types';

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_GAME:
            return {...state, ...action.payload}
        case actionTypes.SET_STATE:
            return {...state, ...action.payload}
    }

    return state;
}