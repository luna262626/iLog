import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight} from 'react-native';


class Saved extends React.Component {


  render() {
     
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Saved!
        </Text>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Interests')}
            >
           <View style={styles.touchableButton1}>
              <Text style={styles.buttonText}>
                Go Back
              </Text>    
           </View>
        </TouchableHighlight>
      </View>
    );
  }

}





const styles = StyleSheet.create({
container:{
backgroundColor:'white',
alignItems:'center',
flex:1,
},
title:{
fontSize:50,
fontWeight:'bold',
},
touchableButton1:{
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


export default Saved;
