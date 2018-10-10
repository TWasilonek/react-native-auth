import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import * as storage from './services/persistentStorage';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import ProtectedScreen from './screens/ProtectedScreen';
import ForgotPassword from './screens/ForgotPassword';

import { colors } from './theme';

const AuthStack = createStackNavigator(
  {
    Login,
    SignUp,
    ForgotPassword,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      title: 'React Native Auth',
      headerTintColor: colors.green,
    },
  },
);

const MainStack = createStackNavigator(
  {
    ProtectedScreen,
  },
  {
    navigationOptions: {
      title: 'React Native Auth',
      headerTintColor: colors.green,
    },
  },
);

class Main extends React.Component {
  async componentDidMount() {
    const { user, storageLogin } = this.props;
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
    const { isAuthenticating, user } = this.props;

    if (!isAuthenticating) {
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

    return isLoggedIn ? <MainStack /> : <AuthStack />;
  }
}

Main.propTypes = {
  user: PropTypes.shape({}),
  isAuthenticating: PropTypes.bool.isRequired,
  storageLogin: PropTypes.func.isRequired,
};

Main.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => {
  const { user, isAuthenticating } = state.auth;
  return {
    user,
    isAuthenticating,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(Main);
