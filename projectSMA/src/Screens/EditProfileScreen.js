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


class EditProfileScreen extends Component {

  componentDidMount() {
  }

  state = { email: '' , password: '', secPassword: '', firstName: '', lastName: '', error: '' };

  async updateAccount() {

  };

  render() {
    return (
     <>
        <StatusBar barStyle="dark-content" />
        <LinearGradient colors={['#F9945E', '#512B58']} style={styles.linearGradient}>
        <SafeAreaView>
        <View style={styles.viewStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.imageStyle} source={require('../../assets/images/LoginLogo.png')} />
            <View>
              <Text style={styles.titleStyle}>Update</Text>
              <Text style={styles.titleStyle}>Account</Text>
            </View>
          </View>
          <View style={styles.editNameStyle}>
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
          </View>
          <View style={styles.editNameStyle}>
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
          </View>
          <View style={styles.editNameStyle}>
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
          </View>
          <View style={styles.editNameStyle}>
              <Text style={styles.subTitleTextStyle}>Set Password</Text>
              <View>
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
            </View>

            <View style={styles.otherItemsStyle}>
              <View style={styles.moreEditViews}>
                <Image style={styles.profileImageStyle} source={require('../../assets/images/ProfileIcon.png')}/>
                <Text style={styles.imageEditTextStyle}>Edit Image</Text>
              </View>
              <View style={styles.moreEditViews}>
                <Text style={styles.quoteTitleStyle}>Favorite Quote</Text>
                <TextInput
                  style={styles.quoteTextStyle}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={this.updateAccount.bind(this)}>
              <View style={styles.loginBtnStyle}>
                <Text style={styles.loginTextStyle}>Update</Text>
              </View>
            </TouchableOpacity>
            <Text> {this.state.error} </Text>
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
    marginRight: "5%",
    height: height*0.12,
    width: height*0.12,
  },
  titleStyle: {
    fontSize: 30,
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    marginBottom: "3%",
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
    margin: "2%",
  },
  editNameStyle: {
    alignItems: 'center',
    margin: "1%",
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  btnTextColor: {
    fontSize: 10,
    color: 'white'
  },
  otherItemsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '2%',
  },
  quoteTitleStyle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  quoteTextStyle: {
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 2,
    height: height*0.15,
    width: width*0.55,
  },
  moreEditViews: {
    margin: "4%",
    alignItems: 'center',
  },
  subTitleTextStyle: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
  },
  profileImageStyle: {
    height: height*0.1,
    width: height*0.1,
  },
  imageEditTextStyle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },

});

export default EditProfileScreen;
