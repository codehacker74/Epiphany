/**
 * ProjectSMA - React Native App
 * https://github.com/facebook/react-native
 *
 * Written by Andrew Masters
 * June 21, 2020
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, } from 'react-native';
import { logoutUser } from '../FirebaseHelper/Auth';
import CategoryIcon from '../Components/CategoryIcon';
import { CategoryListData } from '../Components/CategoryIcon';
import { Actions } from 'react-native-router-flux';

class ProfileScreen extends Component {

  logoutPressed() {
    if (!logoutUser()) {
      //show error message for user not successfully logged out
    }
    
    Actions.reset('login')
  }

  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 1, }}>
          <View>
            <TouchableOpacity onPress={() => this.logoutPressed()}>
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    margin: 10,
  },
  buttonStyle: {
    height: 40,
    width: 150,
    margin: 20,
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
});

export default ProfileScreen;
