import { SET_DATA_LOG_IN, RESET_DATA_ON_LOG_OUT, SHOW_AUTH_LOADER } from './types';
import { LOGIN_STATE } from '../../../constants';

const defaultAuthState = {
    appState: LOGIN_STATE.LOADING
};

export default function authReducer(state = defaultAuthState, action) {
    switch(action.type) {
        case SET_DATA_LOG_IN:
            const { displayName, email, photoURL, uid } = action.data;
            return  {
                displayName,
                email,
                photoUrl: photoURL,
                uid,
                appState: LOGIN_STATE.LOGGED_IN
            };

        case RESET_DATA_ON_LOG_OUT:
            return {
                appState: LOGIN_STATE.LOGGED_OUT
            };

        case SHOW_AUTH_LOADER:
            return {
                appState: LOGIN_STATE.LOADING
            };

        default:
            return state;
    }
}