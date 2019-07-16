import { SET_USER_DATA, RESET_USER_DATA } from './types';
import { LOGIN_STATE } from '../../../constants';

const defaultAuthState = {
    appState: LOGIN_STATE.LOADING
};

export default function authReducer(state = defaultAuthState, action) {
    switch(action.type) {
        case SET_USER_DATA:
            const { displayName, email, photoURL, uid } = action.data;
            return  {
                displayName,
                email,
                photoUrl: photoURL,
                uid,
                appState: LOGIN_STATE.LOGGED_IN
            };

        case RESET_USER_DATA:
            return {
                appState: LOGIN_STATE.LOGGED_OUT
            };

        default:
            return state;
    }
}