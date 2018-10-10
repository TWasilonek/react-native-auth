import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet} from 'react-native';
import {
  Text,
  Card,
} from 'react-native-elements';

import * as actions from '../store/actions';
import { colors } from '../theme';
import AppButton from '../components/AppButton';

class ProtectedScreen extends React.PureComponent {
  onLogoutPress = () => {
    const { logout } = this.props;
    logout();
  }

  render() {
    return (
      <View style={styles.container}>
        <Card 
          title='Protected screen'
          image={require('../assets/nusa-sunset.jpeg')}
        >
          <Text style={styles.text}>
            This is a protected view, which is accessible only to logged in users.
          </Text>
          <AppButton
            onPress={this.onLogoutPress}
            icon={{ name: 'exit-to-app' }}
            buttonStyle={styles.buttonStyle}
            title='LOGOUT' />
        </Card>
      </View>
    );
  }
}

ProtectedScreen.propTypes = {
  logout: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    marginBottom: 10
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  }
});

export default connect(null, actions)(ProtectedScreen);
