import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';


class Interests extends React.Component {


  render() {
     
    return (
 <View style={styles.container}>
  <TouchableHighlight
    onPress={() => this.props.navigation.navigate('Sleep')}>
      <View style={styles.touchableButton1}>
        <Text style={styles.buttonText}>
          Sleep Log
        </Text>
      </View>
  </TouchableHighlight>
  <TouchableHighlight
    onPress={() => this.props.navigation.navigate('Mood')}>
      <View style={styles.touchableButton1}>
        <Text style={styles.buttonText}>
          Mood Log 
        </Text>
      </View>
  </TouchableHighlight>
  <TouchableHighlight
    onPress={() => this.props.navigation.navigate('Study')}>
      <View style={styles.touchableButton1}>
        <Text style={styles.buttonText}>
          Study Log
        </Text>
      </View>
  </TouchableHighlight>
  <TouchableHighlight
    onPress={() => this.props.navigation.navigate('Chore')}>
      <View style={styles.touchableButton1}>
        <Text style={styles.buttonText}>
          Chore Log
        </Text>
      </View>
  </TouchableHighlight>
  <TouchableHighlight
    onPress={() => this.props.navigation.navigate('Health')}>
      <View style={styles.touchableButton1}>
        <Text style={styles.buttonText}>
          Health Log
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
        marginTop: 20,
        marginBottom: 20,
         borderRadius: 10,
    borderWidth: 1,
    
   
    },

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 }
});

export default Interests;
