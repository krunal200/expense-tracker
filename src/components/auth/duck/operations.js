import firebase from 'firebase/app';
import { setDataOnLogIn, resetDataOnLogOut, showAuthLoader } from './actions';

export function registerAuthStateChange() {
    return dispatch => {
        dispatch(showAuthLoader());
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch(setDataOnLogIn(user));
                return;
            }
            dispatch(resetDataOnLogOut());
        });
    }
}

export function logOut() {
    return dispatch => {
        dispatch(showAuthLoader());
        firebase.auth().signOut().catch(console.error);
    }
}