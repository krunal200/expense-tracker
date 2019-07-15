import React, { PureComponent } from 'react';
import firebase from 'firebase/app';
import * as firebaseUi from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

class AuthForm extends PureComponent {
    componentDidMount() {
        const ui = new firebaseUi.auth.AuthUI(firebase.auth());
        ui.start('#auth-form', {
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ]
        });
    }

    render () {
        return (
            <div id='auth-form' ></div>
        );
    }
}

export default AuthForm;