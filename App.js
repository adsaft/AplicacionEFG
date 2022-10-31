import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class HomeActivity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Holamundo como estas</Text>
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
