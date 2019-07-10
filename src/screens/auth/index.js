import React, {PureComponent} from 'react';
import Loader from '../../components/loader';
import './auth.scss';
import { LOGGIN_STATE } from './constant';
import AuthForm from '../../components/auth/form';

class Auth extends PureComponent {

    state = {
      loginState: LOGGIN_STATE.LOGGED_OUT
    };

    renderApp () {
        switch (this.state.loginState) {
            case LOGGIN_STATE.LOADING:
                return <Loader className='auth-loader'/>;

            case LOGGIN_STATE.LOGGED_IN:
                return this.props.children;

            case LOGGIN_STATE.LOGGED_OUT:
                return <AuthForm/>;

            default:
                return  null;
        }
    }

    render () {
        return <div className='auth-container'>
            {this.renderApp()}
        </div>;
    }
}

export default Auth;