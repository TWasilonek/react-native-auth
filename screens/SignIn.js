import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Text
} from 'react-native-elements';

class SignIn extends React.PureComponent {
  onChangeText = text => {
    console.log(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={this.onChangeText} />
        <FormValidationMessage>Error message</FormValidationMessage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default SignIn;
