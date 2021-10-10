/**
 * ProjectSMA - React Native App
 * https://github.com/facebook/react-native
 *
 * Written by Andrew Masters
 * June 21, 2020
 */

import React, { Component } from 'react';
import {
  Dimensions,
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
import { createNewUser } from '../FirebaseHelper/Auth';
import { Actions } from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');


class RegisterScreen extends Component {

  componentDidMount() {
  }

  state = { email: '' , password: '', secPassword: '', firstName: '', lastName: '', error: '' };

  async registerBtnPressed() {
    if(this.state.email == '' || this.state.password == '' ||
        this.state.firstName == '' || this.state.lastName == ''){
      this.setState(() => {error:'You must fill in all fields'})
      return;
    }
    if(this.state.password != this.state.secPassword){
      this.setState(() => {error:'passwords do not match'})
      return;
    }
    const { email, password, secPassword, firstName, lastName, error } = this.state;

    var result = await createNewUser(email, password, firstName, lastName);

    if (!result) {
      console.log("Account Registration FAILED")
      this.setState(() => { error:'Creating user in DB failed'})
      return;
    }

    console.log("Account Registration SUCCESSFUL")
    Actions.replace('homeScreen');

  };

  render() {
    return (
     <>
        <StatusBar barStyle="dark-content" />
        <LinearGradient colors={['#D2FAFB', '#F9945E', '#512B58']} style={styles.linearGradient}>
        <SafeAreaView>
        <View style={styles.viewStyle}>
          <Image style={styles.imageStyle} source={require('../../assets/images/LoginLogo.png')} />
          <Text style={styles.titleStyle}>Register</Text>
            <View style={styles.inputSeparaterStyle}>
              <Text style={styles.subTitleTextStyle}>First Name</Text>
              <View style={styles.inputViewStyle}>
                <TextInput
                  style={styles.userInputStyle}
                  placeholder="John"
                  placeholderTextColor='white'
                  value={this.state.firstName}
                  onChangeText={firstName => this.setState({ firstName })}
                />

              </View>
              <Text style={styles.subTitleTextStyle}>Last Name</Text>
              <View style={styles.inputViewStyle}>
                <TextInput
                  style={styles.userInputStyle}
                  placeholder="Doe"
                  placeholderTextColor='white'
                  value={this.state.lastName}
                  onChangeText={lastName => this.setState({ lastName })}
                />
              </View>
              <Text style={styles.subTitleTextStyle}>Email</Text>
              <View style={styles.inputViewStyle}>
                <TextInput
                  style={styles.userInputStyle}
                  placeholder="john.doe@newuser.com"
                  placeholderTextColor='white'
                  autoCapitalize='none'
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />
              </View>
              <Text style={styles.subTitleTextStyle}>Set Password</Text>
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
              <View style={styles.inputViewStyle}>
                <TextInput
                  style={styles.userInputStyle}
                  placeholder="re-enter password"
                  placeholderTextColor='white'
                  autoCapitalize='none'
                  secureTextEntry={true}
                  value={this.state.secPassword}
                  onChangeText={secPassword => this.setState({ secPassword })}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={this.registerBtnPressed.bind(this)}>
              <View style={styles.loginBtnStyle}>
                <Text style={styles.loginTextStyle}>Register</Text>
              </View>
            </TouchableOpacity>
            <Text> {this.state.error} </Text>

            <View style={styles.loginBtnViewStyle}>
              <TouchableOpacity
                onPress={() => Actions.replace('loginScreen')}
                style={styles.registerBtnStyle}>
                <View>
                  <Text style={styles.btnTextColor}>BACK TO LOGIN</Text>
                </View>
              </TouchableOpacity>
            </View>
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
    margin: "3%",
    padding: "3%",

  },
  imageStyle: {
    margin: "2%",
    height: height*0.2,
    width: height*0.2,
  },
  titleStyle: {
    fontSize: 30,
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    marginBottom: "1%",
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
    height: height*0.045,
    width: width*0.6,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    margin: "3%",
  },
  inputSeparaterStyle: {
    alignItems: 'center',
    margin: "2%",
    justifyContent: 'space-between',
  },
  loginBtnStyle: {
    height: height*0.045,
    width: width*0.45,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
	     width: 0,
  	   height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  loginTextStyle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  loginBtnViewStyle: {

  },
  registerBtnStyle: {
    height: height*0.045,
    width: width*0.3,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextColor: {
    fontSize: 10,
    color: 'white'
  },
  subTitleTextStyle: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
  }

});

export default RegisterScreen;
