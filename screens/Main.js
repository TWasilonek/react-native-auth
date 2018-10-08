import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

import SignUp from './SignUp';
import SignIn from './SignIn';
import ProtectedScreen from './ProtectedScreen';

// TODO: Add React Navigation
// TODO: Add logic wich basing on a boolean isLoggedIn directs to one navigation stack or another
// TODO: State management - redux

class Main extends React.Component {
  componentDidMount() {
    const { user, logIn } = this.props;
    if (user === null) {
      console.log('NO USER!');
      logIn();
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
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}

Main.propTypes = {
  user: PropTypes.shape({}),
  isAuthenticating: PropTypes.bool,
  loginError: PropTypes.shape({}),
  logIn: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const { user, isAuthenticating } = state.auth;
  return {
    user,
    isAuthenticating,
  };
}

export default connect(mapStateToProps, actions)(Main);
