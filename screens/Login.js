import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Text
} from 'react-native-elements';

import ScreenContainer from '../components/ScreenContainer';

class Login extends React.PureComponent {
  onChangeText = text => {
    console.log(text);
  };

  render() {
    return (
      <ScreenContainer>
        <View style={styles.container}>
          <Text>Sign In</Text>
          <FormLabel>Name</FormLabel>
          <FormInput onChangeText={this.onChangeText} />
          <FormValidationMessage>Error message</FormValidationMessage>
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Login;
