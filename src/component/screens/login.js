import React, { Component } from 'react';
import {
  Button,
  View,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';



export default class Login extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <ImageBackground style={styles.imgb} source={require('../../images/bg_1.png')}>
          <View style={{alignItems:'center', marginTop: 20}} >
            <Image style={styles.brain} source={require('../../images/brain.png')}/>
            <Text style={{fontSize:30, color: '#fff'}} > C H A I N </Text>
          </View>
          <View style={{alignItems: 'center', justifyContent:'flex-end',flex:1, }}>
            <View>
            <TouchableOpacity style={styles.face} >
            
              <Text style={{color: '#fff',textAlign:'center' }} >
                Signup with Facebook
              </Text>
              
              {/* <Button title="Signup with Facebook" color="#0066ee" /> */}
            </TouchableOpacity >
            </View>
            <View style={{paddingTop:20}} >
              <TouchableOpacity style={styles.goo} >
              <Text style={{color: '#fff', textAlign:'center'}}>
                Signup with Google
              </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TextInput 
                placeholder="Enter Email"
                keyboardType='email-address'
                underlineColorAndroid='transparent'
                style={styles.input}
              />
              <TextInput 
                placeholder="Enter Password"
                secureTextEntry
                underlineColorAndroid='transparent'
                style={styles.input}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgb:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  container:{
    flex:1
  },

  logo:{
    width:128,
    height:128,
    
  },

  chaintext:{
    fontFamily: 'Papyrus',
    fontSize: 20,
  },
  abc:{
    height: Dimensions.get('window').height,
    flex:1,
    alignItems: 'center',
    marginTop: 80
  },
  def:{
    height: Dimensions.get('window').height,
    flex:1,
    alignItems: 'center',
    marginTop: -100
  },
  brain:{
    height:100,
    width:100
  },
  goo: {
    backgroundColor:'#ff4949',
  paddingVertical: 10,
  width:250,
  borderRadius: 20,
  },
 face: {
  backgroundColor:'#0066ee',
  paddingVertical: 10,
  width:250,
  borderRadius: 20,

 },
 input:{
  height: 40,
  width:250,
  backgroundColor: 'rgba(255,255,255,0.2)',
  marginBottom: 20,
  color:'#fff',
  paddingHorizontal: 10,
  borderRadius: 20,
  textAlign:'center'
},
})