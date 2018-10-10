import React from 'react';
import AppButton from './AppButton';
import { colors } from '../theme';

const AppLink = (props) => {
  return (
    <AppButton
      color={colors.green}
      backgroundColor="transparent"
      {...props}
    />
  );
};

export default AppLink;
