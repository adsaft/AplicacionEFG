import {name as AplicacionEFG} from './app.json';

import React, {Component} from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';
import App from './App';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Set background of main activity screenWWW
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E1BEE7',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});
AppRegistry.registerComponent(AplicacionEFG, () => App);
