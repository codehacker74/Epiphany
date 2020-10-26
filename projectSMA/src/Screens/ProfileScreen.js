/**
 * ProjectSMA - React Native App
 * https://github.com/facebook/react-native
 *
 * Written by Andrew Masters
 * June 21, 2020
 */

import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, } from 'react-native';
import { CategoryIcon } from '../Components/CategoryIcon';
import { CategoryListData } from '../Components/CategoryIcon';
import { Actions } from 'react-native-router-flux';
import { PullUserInfo } from '../FirebaseHelper/UserHelper';
import { logoutUser } from '../FirebaseHelper/Auth';

class ProfileScreen extends Component {

  state = {data : {}, notes : {} };

  async componentDidMount() {

    const newData = await PullUserInfo();
    await this.setState({data : newData})

  }

  async logoutPressed() {
    if ( !(await logoutUser()) ) {
      //show error message for user not successfully logged out
      console.log("Attempted to logout user but failed")
      return;
    }

    Actions.reset('login')
  }

  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 1, }}>
          <View style={styles.mainViewStyle}>
            <View style={styles.profileViewStyle}>
              <Image style={styles.profileImageStyle} source={require('../../assets/images/ProfileIcon.png')}/>
              <View style={styles.textViewStyle}>
                <Text style={styles.nameTextStyle}>{this.state.data.name}</Text>
                <Text style={styles.quoteTextStyle}>"This is my favorite phrase"</Text>
              </View>
            </View>
            <View style={styles.buttonsViewStyle}>
              <TouchableOpacity>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Edit Profile</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Friends</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.logoutPressed()}>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList style={styles.flatListStyle}>

              </FlatList>
            </View>

          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    alignItems: 'center',

  },
  profileViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  buttonsViewStyle: {
    flexDirection: 'row',

  },
  textViewStyle: {
    alignItems: 'center',
    marginLeft: 25,
  },
  profileImageStyle: {
    resizeMode: 'stretch',
    height: 100,
    width: 100,
  },
  nameTextStyle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 25,
    margin: 5,
  },
  quoteTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    marginTop: 10,
  },
  scrollStyle: {
    margin: 10,
  },
  buttonStyle: {
    height: 40,
    width: 120,
    margin: 5,
    backgroundColor: '#F9945E',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    color: 'white',
  },
  flatListStyle: {
    margin: 20,

  },
});

export default ProfileScreen;
