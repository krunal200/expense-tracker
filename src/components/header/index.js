import React  from 'react';
import { connect } from 'react-redux';
import { LOGIN_STATE } from '../../constants';

function Header({ displayName, appState }) {
    switch (appState) {
        case LOGIN_STATE.LOGGED_IN:
            return `Welcome ${displayName}`;

        case LOGIN_STATE.LOGGED_OUT:
            return 'Please sing in';

        default:
            return  null;
    }
}

function mapStateToProps (state) {
    const { auth: { displayName, appState } } = state;
    return {
        displayName,
        appState
    }
}

export default connect(mapStateToProps)(Header);