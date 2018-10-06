import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import ProtectedScreen from './screens/ProtectedScreen';

export default class App extends React.Component {
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
    justifyContent: 'center',
  }
});
