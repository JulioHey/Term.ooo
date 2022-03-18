import * as actionTypes from './actions_types';

export const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.SET_CURRENT_INDEX:
            return {...state, ...action.payload}
        case actionTypes.SET_TRYS:
            return {...state, ...action.payload}
        case actionTypes.HANDLE_KEY:
            return {...state, ...action.payload}
        case actionTypes.SET_STATE:
            return {...state, ...action.payload}
    }

    return state;
}