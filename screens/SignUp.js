import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import ScreenContainer from '../components/ScreenContainer';
import AppInput from '../components/AppInput';

import * as actions from '../store/actions';

class SignUp extends React.PureComponent {
  state = {
    email: '',
    password: ''
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
          <Button
            title="SIGNUP"
            onPress={this.onSubmit}
            disabled={!email || !password}
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
    marginRight: 'auto'
  },
  additionalActions: {
    marginTop: 20
  }
});

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired
};

export default connect(
  null,
  actions
)(SignUp);
