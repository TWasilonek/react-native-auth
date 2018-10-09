import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ScreenContainer = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

export default ScreenContainer;
