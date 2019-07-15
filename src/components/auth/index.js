import React, {PureComponent} from 'react';
import Loader from '../../ui/loader';
import './auth.scss';
import { LOGGIN_STATE } from './constant';
import AuthForm from './form';

class Auth extends PureComponent {

    state = {
      loginState: LOGGIN_STATE.LOGGED_OUT //LOGGIN_STATE.LOADING
    };

    renderChildren () {
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
            {this.renderChildren()}
        </div>;
    }
}

export default Auth;