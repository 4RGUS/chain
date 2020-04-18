//imports
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux';
import * as routes from './src/component/screens';



//main class
export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene
         key='root'>
          <Scene key='Home' initial component={routes.home} title='Home' />
          <Scene key='log' initial hideNavBar component={routes.login} title='Login' />
          <Scene key='reg' component={routes.register} title='reg' />
        </Scene>
      </Router>
    );
  }
}


//stylesheets
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
