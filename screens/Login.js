import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

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

  render() {
    return (
      <ScreenContainer>
        <View style={styles.container}>
          <Text>Login</Text>
          <AppInput
            label="Email"
            onChangeInput={(value) => this.onChangeInput(value, 'email')}
          />
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
