import React  from 'react';
import { connect } from 'react-redux';
import { LOGIN_STATE } from '../../constants';
import './header.scss';
import { logOut } from '../auth/duck';

function Header({ displayName, appState, email, handleSignOutBtnClick }) {
    switch (appState) {
        case LOGIN_STATE.LOGGED_IN:
            return (
                <div className='header'>
                    <h3>
                        {displayName}
                        <a href='javascript:;' onClick={handleSignOutBtnClick}>Sign out</a>
                    </h3>
                    <p>({email})</p>
                </div>
            );

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

const mapDispatchToProps = {
    handleSignOutBtnClick: logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);