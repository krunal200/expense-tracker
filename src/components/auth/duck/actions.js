import { SET_USER_DATA, RESET_USER_DATA } from './types';

export function setUserData (userData) {
    return {
        type: SET_USER_DATA,
        data: userData
    };
}

export function resetUserData () {
    return {
        type: RESET_USER_DATA
    };
}
