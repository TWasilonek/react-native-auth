import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import ScreenContainer from '../components/ScreenContainer';
import AppInput from '../components/AppInput';

import * as actions from '../store/actions';

class Login extends React.PureComponent {
  state = {
    email: '',
    password: '',
  };

  onChangeInput = (text, name) => {
    this.setState({ [name]: text });
  };

  onSubmit = () => {
    const { login } = this.props;
    const params = { ...this.state };
    login(params);
  }

  render() {
    const { email, password } = this.state;
    const { navigation } = this.props;
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
            disabled={!email || !password}
          />
          <View style={styles.additionalActions}>
            <Button
              title="Not a member? Sign In"
              color="#0000ff"
              backgroundColor="transparent"
              onPress={() => navigation.navigate('SignUp')}
            />
            <Button
              title="Forgot Password"
              color="#0000ff"
              backgroundColor="transparent"
              onPress={() => navigation.navigate('ForgotPassword')}
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(null, actions)(Login);
