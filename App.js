/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RootToast from './components/RootToast';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  // constructor() {
  //   super(...arguments);
  //   this.state = {
  //       visible: false
  //   };
  // }

  // componentDidMount() {
  //     setTimeout(() => this.setState({
  //         visible: true
  //     }), 2000); // show toast after 2s

  //     setTimeout(() => this.setState({
  //         visible: false
  //     }), 5000); // hide toast after 5s
  // };

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 30, marginLeft: 30, marginRight: 30}}>
          <Text style={{textAlign: 'center', fontSize: 40, color: 'blue'}}>Smarty Solution</Text>
          <Text style={{textAlign: 'center', color: 'green'}}>Smarty Solution</Text>
        </View>
        <View style={{marginBottom: 30, marginLeft: 30, marginRight: 30}}>
          <Text style={{textAlign: 'center'}}>React Native Toast Sample</Text>
        </View>
        
        <View style={{marginTop: 30}}>
          <Text>https://www.npmjs.com/package/react-native-root-toast</Text>
        </View>

        <RootToast></RootToast>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
