
import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';


class Login extends React.Component {


  render() {
     
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <View style={styles.textContainer}>
                <Image source ={{uri:
                  'https://codehs.com/uploads/23d4c9c407a3af0a0ac472a396b0d35e'}}
                  style={{ height: 40, width: 40, justifyContent: 'center',                         margin: 40, alignContent: 'center' }}
                />
              </View>
             <TextInput placeholder="Email/Username" placeholderColor="#c4c3cb" style=                   {styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style=               {styles.loginFormTextInput} secureTextEntry={true}/>

             <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Occupation')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

}



const styles = StyleSheet.create({

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
  backgroundColor:'white',
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: 'black',
  backgroundColor: 'white',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},

touchableButton1: {
        backgroundColor: '#B22222',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
    borderWidth: 1,
    
   
    },

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 }
});

export default Login;
