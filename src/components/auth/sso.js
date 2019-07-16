import React, { PureComponent } from 'react';
import firebase from 'firebase/app';
import * as firebaseUi from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { FIREBASE_UI_CONFIG } from '../../constants';

class SSO extends PureComponent {
    componentDidMount() {
        const ui = new firebaseUi.auth.AuthUI(firebase.auth());
        ui.start('#auth-form', FIREBASE_UI_CONFIG);
    }

    render () {
        return (
            <div id='auth-form' />
        );
    }
}

export default SSO;