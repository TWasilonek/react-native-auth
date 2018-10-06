import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import SignUp from './SignUp';
import SignIn from './SignIn';
import ProtectedScreen from './ProtectedScreen';

// TODO: Add React Navigation
// TODO: Add logic wich basing on a boolean isLoggedIn directs to one navigation stack or another
// TODO: State management - redux

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Main;
