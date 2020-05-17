import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Welcome from './src/login/Welcome.js';
import Login from './src/login/Login.js';
import Occupation from './src/login/Occupation.js';
import Interests from './src/login/Interests.js';
import Mood from './src/login/Mood.js';
import Sleep from './src/login/Sleep.js';
import Study from './src/login/Study.js';
import Chore from './src/login/Chore.js';
import Health from './src/login/Health.js';
import Saved from './src/login/Saved.js';

const RootStack = createStackNavigator(
{
  Welcome: { screen: Welcome },
  Login: { screen: Login },
  Occupation: { screen: Occupation },
  Interests: { screen: Interests },
  Mood: { screen: Mood },
  Sleep: { screen: Sleep },
  Study: { screen: Study },
  Chore: { screen: Chore },
  Health: { screen: Health },
  Saved: { screen: Saved },
},
{
    initialRouteName: 'Welcome',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
