import React from 'react';
import { View } from 'react-native';
import {
  Text
} from 'react-native-elements';

import ScreenContainer from '../components/ScreenContainer';

class ProtectedScreen extends React.PureComponent {
  render() {
    return (
      <ScreenContainer>
        <View>
          <Text>ProtectedScreen</Text>
          <Text>ProtectedScreen</Text>
          <Text>ProtectedScreen</Text>
          <Text>ProtectedScreen</Text>
        </View>
      </ScreenContainer>
    );
  }
}

export default ProtectedScreen;
