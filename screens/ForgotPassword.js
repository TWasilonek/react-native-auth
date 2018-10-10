import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Button, Text} from 'react-native-elements';

import ScreenContainer from '../components/ScreenContainer';
import AppInput from '../components/AppInput';

class ForgotPassword extends React.PureComponent {
  state = {
    email: '',
  };

  onChangeInput = (text, name) => {
    this.setState({ [name]: text });
  };

  onSubmit = () => {
    const { navigation } = this.props;
    navigation.navigate('Login');
  }

  render() {
    const { email } = this.state;
    return (
      <ScreenContainer>
        <View style={styles.container}>
          <Text>
            We will send the instructions how you can reset your password to your email.
          </Text>
          <AppInput
            label="Email"
            onChangeInput={(value) => this.onChangeInput(value, 'email')}
          />
          <Button
            title='SEND EMAIL'
            onPress={this.onSubmit}
            disabled={!email}
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
});

ForgotPassword.propTypes = {
  navigation: PropTypes.shape({}).isRequired
};

export default ForgotPassword;
