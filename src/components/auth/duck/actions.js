import { SET_DATA_LOG_IN, RESET_DATA_ON_LOG_OUT, SHOW_AUTH_LOADER } from './types';

export function setDataOnLogIn (userData) {
    return {
        type: SET_DATA_LOG_IN,
        data: userData
    };
}

export function resetDataOnLogOut () {
    return {
        type: RESET_DATA_ON_LOG_OUT
    };
}

export function showAuthLoader () {
    return {
        type: SHOW_AUTH_LOADER
    };
}
