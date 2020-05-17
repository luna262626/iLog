import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';


class Occupation extends React.Component {


  render() {
     
    return (
 <View style={styles.container}>
  <TouchableHighlight
    onPress={() => this.props.navigation.navigate('Interests')}>
      <View style={styles.touchableButton1}>
        <Text style={styles.buttonText}>
          School
        </Text>
      </View>
  </TouchableHighlight>
  <TouchableHighlight
    onPress={() => this.props.navigation.navigate('Interests')}>
      <View style={styles.touchableButton1}>
        <Text style={styles.buttonText}>
          Work
        </Text>
      </View>
  </TouchableHighlight>
  <TouchableHighlight
    onPress={() => this.props.navigation.navigate('Interests')}>
      <View style={styles.touchableButton1}>
        <Text style={styles.buttonText}>
          Home
        </Text>
      </View>
  </TouchableHighlight>
</View>

    );
  }

}



const styles = StyleSheet.create({
container:{
alignItems:'center',
backgroundColor:'white',
},
touchableButton1: {
        backgroundColor: '#B22222',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
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

export default Occupation;
