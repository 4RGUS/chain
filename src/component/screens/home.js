import React, { Component } from 'react';
import {  View, Text, Button, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <View>
         <StatusBar
     backgroundColor="#ff4949"
     barStyle="light-content"
   />
        <Text> This is home </Text>
        <Button
          title='login'
          onPress={()=>Actions.log()}
         />
      </View>
    );
  }
}
