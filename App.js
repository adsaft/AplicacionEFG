import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class Menu extends Component {
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
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E1BEE7',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});
/*<Image
style={styles.tinyLogo}
source={require('@expo/snack-static/react-native-logo.png')}
/>
<Image
style={styles.tinyLogo}
source={{
  uri: 'https://reactnative.dev/img/tiny_logo.png',
}}
/>
<Image
style={styles.logo}
source={{
  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
}}
/>*/