import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
