import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';


class Mood extends React.Component {


  render() {
     
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
             <TextInput placeholder="Date" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            
            <TextInput placeholder="Have you been happy today?" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            
            <TextInput placeholder="Have you been mad?" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <TextInput placeholder="Have you been sad?" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <TextInput placeholder="Have you been calm?" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
             <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Saved')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Save
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
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
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

export default Mood;
