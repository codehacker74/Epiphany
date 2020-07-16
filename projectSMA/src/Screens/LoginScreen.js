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
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { loginUser } from '../FirebaseHelper/Auth';
import { Actions } from 'react-native-router-flux';

class LoginScreen extends Component {

  state = { email: '' , password: '', error: '' };

  loginPressed() {
    // const { email, password, error } = this.state;
    // if (!loginUser()) {
    //   this.setState({ error='Login Failed'})
    // }
    Actions.push('rEpiphany')
  }

  render() {
    return (
     <>
        <StatusBar barStyle="dark-content" />
        <LinearGradient colors={['#D2FAFB', '#F9945E', '#512B58']} style={styles.linearGradient}>
        <SafeAreaView>
        <View style={styles.viewStyle}>
          <Text>ProjectSMA</Text>
            <View style={styles.inputViewStyle}>
              <TextInput
                style={styles.userInputStyle}
                placeholder="email"
                autoCapitalize='none'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                style={styles.userInputStyle}
                placeholder="password"
                autoCapitalize='none'
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <TouchableOpacity
              onPress={this.loginPressed.bind(this)}>
              <View style={styles.loginBtnStyle}>
                <Text>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <Text> {this.state.error} </Text>
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.registerBtnStyle}>
              <View>
                <Text>Register</Text>
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
    padding: 10,

  },
  titleStyle: {
    fontSize: 30,
    color: 'white',
  },
  registerBtnStyle: {
    borderRadius: 10,
    borderColor: 'white',
  },
  linearGradient: {
    flex: 1,
  },
  userInputStyle: {
    height: 35,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    margin: 20,
  },
  inputViewStyle: {
    alignItems: 'center'
  },
  loginBtnStyle: {
    height: 30,
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

});

export default LoginScreen;
