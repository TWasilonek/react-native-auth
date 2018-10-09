import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

import SignUp from './SignUp';
import Login from './Login';
import ProtectedScreen from './ProtectedScreen';
import ForgotPassword from './ForgotPassword';

// TODO: Add React Navigation
// TODO: Add logic wich basing on a boolean isLoggedIn directs to one navigation stack or another
//      The navigation stacks are AUTH and MAIN NAVIGATION (or smthg similar - check the diagram at)
// TODO: State management - redux

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

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
  state = {
    isLoggedIn: false,
  };

  componentDidMount() {
    const { user, logIn } = this.props;
    if (user === null) {
      console.log('NO USER!');
      setTimeout(() => {
        logIn();
      }, 1000);
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
          this.setState({ isLoggedIn: true });
        } else if (user.username !== prevProps.user.username) {
          console.log('we have a new user:', user);
          this.setState({ isLoggedIn: true });
        }
      }
    }
  }

  render() {
    const { user } = this.props;
    const { isLoggedIn } = this.state;
    // const isLoggedIn = user && !!user.username;
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
  logIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { user, isAuthenticating } = state.auth;
  return {
    user,
    isAuthenticating,
  };
}

export default connect(mapStateToProps, actions)(Main);
