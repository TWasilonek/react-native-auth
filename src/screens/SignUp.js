import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ScreenContainer from '../components/ScreenContainer';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

import * as actions from '../store/actions';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  additionalActions: {
    marginTop: 20,
  },
});

class SignUp extends React.PureComponent {
  state = {
    email: '',
    password: '',
  };

  onChangeInput = (text, name) => {
    this.setState({ [name]: text });
  };

  onSubmit = () => {
    const { signUp } = this.props;
    const params = { ...this.state };
    signUp(params);
  };

  render() {
    const { email, password } = this.state;
    return (
      <ScreenContainer>
        <View style={styles.container}>
          <AppInput
            label="Email"
            onChangeInput={value => this.onChangeInput(value, 'email')}
          />
          <AppInput
            label="Password"
            onChangeInput={value => this.onChangeInput(value, 'password')}
            secureTextEntry
          />
          <AppButton
            title="SIGNUP"
            onPress={this.onSubmit}
            disabled={!email || !password}
          />
        </View>
      </ScreenContainer>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
};

export default connect(
  null,
  actions,
)(SignUp);
