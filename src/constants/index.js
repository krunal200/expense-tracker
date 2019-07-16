import * as firebase from 'firebase/app';

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyD9DGJnnKtSJb7Zj6OkcEjcP93h74zkkTI",
    authDomain: "expense-tracker-7a896.firebaseapp.com",
    projectId: "expense-tracker-7a896",
    appID: "1:626133607189:android:159d8bd92facacb5",
};

export const FIREBASE_UI_CONFIG = {
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
};

export const LOGIN_STATE = {
    LOADING: 'LOADING',
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT'
};