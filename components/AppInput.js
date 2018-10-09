import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import {
  FormLabel,
  FormInput,
} from 'react-native-elements';

const AppInput = ({ label, onChangeInput }) => {
  return (
    <View style={styles.inputContainer}>
      <FormLabel>{label}</FormLabel>
      <FormInput onChangeText={onChangeInput} />
    </View>
  );
};

AppInput.propTypes = {
  label: PropTypes.string,
  onChangeInput: PropTypes.func,
}

AppInput.defaultProps = {
  label: '',
  onChangeInput: () => {},
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1
  }
});

export default AppInput;
