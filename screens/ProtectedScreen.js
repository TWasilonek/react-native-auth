import React from 'react';
import { View } from 'react-native';
import {
  Text
} from 'react-native-elements';

class ProtectedScreen extends React.PureComponent {
  render() {
    return (
      <View>
        <Text>ProtectedScreen</Text>
        <Text>ProtectedScreen</Text>
        <Text>ProtectedScreen</Text>
        <Text>ProtectedScreen</Text>
      </View>
    );
  }
}

export default ProtectedScreen;
