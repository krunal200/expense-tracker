import React  from 'react';
import { connect } from 'react-redux';
import { LOGIN_STATE } from '../../constants';

function Header({ displayName, appState, email }) {
    switch (appState) {
        case LOGIN_STATE.LOGGED_IN:
            return `Welcome ${displayName} (${email})`;

        case LOGIN_STATE.LOGGED_OUT:
            return 'Please sing in';

        default:
            return  null;
    }
}

function mapStateToProps (state) {
    const { auth: { displayName, appState, email } } = state;
    return {
        displayName,
        appState,
        email
    }
}

export default connect(mapStateToProps)(Header);