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

import { colors } from '../theme';

const AuthStack = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    ForgotPassword: ForgotPassword
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      title: 'React Native Auth',
      headerTintColor: colors.green,
    }
  }
);

const MainStack = createStackNavigator(
  {
    ProtectedScreen: ProtectedScreen,
  },
  {
    navigationOptions: {
      title: 'React Native Auth',
      headerTintColor: colors.green,
    }
  }
);

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
      signUpError,
      isAuthenticating,
      user,
    } = this.props;

    if(!isAuthenticating) {
      if (user && user.username) {
        if (!prevProps.user) {
          // a user has logged in
        } else if (user.username !== prevProps.user.username) {
          // a new user has logged in
        }
      }
    }
  }

  render() {
    const { user } = this.props;
    const isLoggedIn = user && !!user.username;

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
  storageLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { user, isAuthenticating, loginError, signUpError } = state.auth;
  return {
    user,
    isAuthenticating,
  };
}

export default connect(mapStateToProps, actions)(Main);
