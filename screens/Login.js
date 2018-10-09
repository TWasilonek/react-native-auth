import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-elements';

import ScreenContainer from '../components/ScreenContainer';
import AppInput from '../components/AppInput';

class Login extends React.PureComponent {
  state = {
    email: '',
    password: '',
  };

  onChangeInput = (text, name) => {
    this.setState({ [name]: text });
  };

  onSubmit = () => {
    // TODO: login user
  }

  render() {
    return (
      <ScreenContainer>
        <View style={styles.container}>
          <AppInput
            label="Email"
            onChangeInput={(value) => this.onChangeInput(value, 'email')}
          />
          <AppInput
            label="Password"
            onChangeInput={(value) => this.onChangeInput(value, 'password')}
            secureTextEntry
          />
          <Button
            title='LOGIN'
            onPress={this.onSubmit}
          />
          <View style={styles.additionalActions}>
            <Button
              title="Not a member? Sign In"
              color="#0000ff"
              backgroundColor="transparent"
            />
            <Button
              title="Forgot Password"
              color="#0000ff"
              backgroundColor="transparent"
            />
          </View>
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  additionalActions: {
    marginTop: 20
  }
});

export default Login;
