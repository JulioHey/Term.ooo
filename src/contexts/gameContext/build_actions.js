import InputController from '../../controllers/gameController';
import * as actionsTypes from './actions_types';

export const buildActions = (dispatch) => {
    return {
        handleKeyDown: (key, state) => handleKey(key, state, dispatch),
        setState: (payload) => dispatch({type: actionsTypes.SET_STATE, payload}),
        setCurrentIndex: (payload) => dispatch({type: actionsTypes.SET_CURRENT_INDEX, payload})
    }
}

const handleKey = (key, state, dispatch) => {
    const inputController = new InputController(state);

    const newState = inputController.handleInput(key);

    return dispatch({type: actionsTypes.HANDLE_KEY, payload: newState});
}
