import React, {PureComponent} from 'react';
import Loader from '../../ui/loader';
import './auth.scss';
import { LOGIN_STATE } from '../../constants';
import SSO from './sso';
import { connect } from 'react-redux'
import { registerAuthStateChange } from './duck';

class Auth extends PureComponent {
    componentDidMount() {
        this.props.registerAuthStateChange();
    }

    renderChildren () {
        switch (this.props.appState) {
            case LOGIN_STATE.LOADING:
                return <Loader className='auth-loader'/>;

            case LOGIN_STATE.LOGGED_IN:
                return this.props.children;

            case LOGIN_STATE.LOGGED_OUT:
                return <SSO/>;

            default:
                return  null;
        }
    }

    render () {
        return (
            <>
                {this.renderChildren()}
            </>
        );
    }
}

function mapStateToProps(state) {
    const { auth: { appState } } = state;
    return {
        appState
    };
}

const mapDispatchToProps = {
    registerAuthStateChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);