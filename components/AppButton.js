import React from 'react';
import {
  Button
} from 'react-native-elements';
import { colors } from '../theme';

const AppButton = (props) => {
  return (
    <Button
      backgroundColor={colors.green}
      {...props}
    />
  );
};

export default AppButton;
