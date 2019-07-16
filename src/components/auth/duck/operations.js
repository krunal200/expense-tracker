import firebase from 'firebase/app';
import { setUserData, resetUserData } from './actions';

export function registerAuthStateChange() {
    return dispatch => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch(setUserData(user));
                return;
            }
            dispatch(resetUserData());
        });
    }
}

export function logout() {
    return dispatch => {

    }
}