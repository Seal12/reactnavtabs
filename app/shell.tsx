import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppNavigator from 'app/navigation';

let NavigationModule = null;

export default class Shell extends Component {

  state = {
    isLoading: true
  };

  initialiseShellState = () => {

  }

  componentDidMount() {

    if (!NavigationModule) {

      NavigationModule = AppNavigator.getNavigationContainer('Login');
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        { NavigationModule && <NavigationModule /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});