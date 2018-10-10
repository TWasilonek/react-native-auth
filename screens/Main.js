import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import * as storage from '../services/persistentStorage';

import SignUp from './SignUp';
import Login from './Login';
import ProtectedScreen from './ProtectedScreen';
import ForgotPassword from './ForgotPassword';

const AuthStack = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    ForgotPassword: ForgotPassword
  },
  {
    initialRouteName: 'Login'
  }
);

const MainStack = createStackNavigator({
  ProtectedScreen: ProtectedScreen
});

class Main extends React.Component {
  async componentDidMount() {
    const { user, storageLogin} = this.props;
    if (user === null) {
      try {
        const savedUser = await storage.retrieveData('user');
        storageLogin(savedUser);
      } catch (error) {
        console.log('error getting user from stroage: ', error);
      }
    }
  }

  componentDidUpdate(prevProps) {
    const {
      loginError,
      isAuthenticating,
      user,
    } = this.props;

    if(!isAuthenticating && !loginError) {
      if (user && user.username) {
        if (!prevProps.user) {
          console.log('we have a new user:', user);
        } else if (user.username !== prevProps.user.username) {
          console.log('we have a new user:', user);
        }
      }
    }
  }

  render() {
    const { user } = this.props;
    const isLoggedIn = user && !!user.username;
    console.log('user', user);
    console.log('isLoggedIn: ', isLoggedIn);

    return (
      isLoggedIn 
        ? <MainStack />
        : <AuthStack />
    );
  }
}

Main.propTypes = {
  user: PropTypes.shape({}),
  isAuthenticating: PropTypes.bool,
  loginError: PropTypes.shape({}),
  storageLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { user, isAuthenticating } = state.auth;
  return {
    user,
    isAuthenticating,
  };
}

export default connect(mapStateToProps, actions)(Main);
