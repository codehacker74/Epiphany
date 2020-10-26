/**
 * ProjectSMA - React Native App
 * https://github.com/facebook/react-native
 *
 * Written by Andrew Masters
 * June 21, 2020
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { checkUser, loginUser } from '../FirebaseHelper/Auth';
import { Actions } from 'react-native-router-flux';

class LoginScreen extends Component {

  async componentDidMount() {
      // console.log('Check if user exists')
      // if(checkUser()){
      //   console.log('user exists, moving to main scren')
      //   Actions.replace('noteWaiting');
      // }
  }

  state = { email: '' , password: '', error: '' };

  async loginPressed() {
    if(this.state.email == '' || this.state.password == ''){
      this.setState(() => {error:'Enter an email and password'})
      return
    }
    const { email, password, error } = this.state;

    var result = await loginUser(email, password);

    if (!result) {
      console.log("Account Not Found");
      this.setState(() => { error:'Email or Password is incorrect'})
      return;
    }
    console.log("Account Logged In");
    Actions.replace('homeScreen')
  }

  render() {
    return (
     <>
        <StatusBar barStyle="dark-content" />
        <LinearGradient colors={['#D2FAFB', '#F9945E', '#512B58']} style={styles.linearGradient}>
        <SafeAreaView>
        <View style={styles.viewStyle}>
          <Image style={styles.imageStyle} source={require('../../assets/images/LoginLogo.png')} />
          <Text style={styles.titleStyle}>Epiphany</Text>
            <View style={styles.inputSeparaterStyle}>
              <View style={styles.inputViewStyle}>
                <TextInput
                  style={styles.userInputStyle}
                  placeholder="email"
                  placeholderTextColor='white'
                  autoCapitalize='none'
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />

              </View>
              <View style={styles.inputViewStyle}>
                <TextInput
                  style={styles.userInputStyle}
                  placeholder="password"
                  placeholderTextColor='white'
                  autoCapitalize='none'
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={this.loginPressed.bind(this)}>
              <View style={styles.loginBtnStyle}>
                <Text style={styles.loginTextStyle}>Login</Text>
              </View>
            </TouchableOpacity>
            <Text> {this.state.error} </Text>
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => Actions.replace('registerScreen')}
              style={styles.registerBtnStyle}>
              <View>
                <Text style={styles.btnTextColor}>Register</Text>
              </View>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
        </LinearGradient>

     </>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    margin: 20,
    padding: 20,

  },
  imageStyle: {
    margin: 20,
    marginTop: 30,
  },
  titleStyle: {
    fontSize: 30,
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    margin: 20,
    marginBottom: 20,
  },
  registerBtnStyle: {
    borderRadius: 10,
    borderColor: 'white',
  },
  linearGradient: {
    flex: 1,
  },
  userInputStyle: {
    flex: 1,
    marginLeft: 5,
    fontSize: 17,
    color: 'white',
  },
  inputViewStyle: {
    height: 35,
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    margin: 10,
  },
  inputSeparaterStyle: {
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
  },
  loginBtnStyle: {
    height: 35,
    width: 175,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 70,
    shadowColor: 'black',
    shadowOffset: {
	     width: 0,
  	   height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  loginTextStyle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  registerBtnStyle: {
    height: 30,
    width: 100,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  btnTextColor: {
    color: 'white'
  },

});

export default LoginScreen;
