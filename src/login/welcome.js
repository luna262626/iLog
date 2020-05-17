import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.fadeAnim = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.timing(          // Animate over time
      this.fadeAnim, // The animated value to drive
      {
        toValue: 0,           // Animate to opacity: 1 (opaque)
        duration: 2000,
      }
    ).start(() => {
      console.log('fading out')
      // this.props.navigation.navigate('login');
      /* setTimeout(() => {
        this.fadeOut();
      }, 2000); */
    });
               
  }

  render() {
    return (


      <View style={styles.container}>

<View style={styles.textContainer}>
            <Text style={styles.title}>
            Welcome to iLog
            </Text>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Login')}
            >
           <View style={styles.touchableButton1}>
                        <Image source ={{uri: 'https://codehs.com/uploads/e31cfad09366ddfaac6527d926b662d7'}}
 style={{ height: 145, width: 250, justifyContent: 'center', }}
/>
                    </View>
                </TouchableHighlight>
            <Text style={styles.text}>
            Click on the planner to begin
            </Text>
            </View>

 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color:'gray',
    fontWeight:'bold',
  },
  title:{
    fontWeight:'bold',
    fontSize:40
  },
});


export default Welcome;
