

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { getRandomPost } from '../FirebaseHelper/Pull';

class NoteOpenedScreen extends Component {

  postData = {};

  async componentDidMount() {
    postData = await getRandomPost();
    if(postData != null){
      return;
    }
    console.log("Random post data not found");
    Actions.popTo('noteWaiting');
  }

  render() {
    return (
      <>
        <LinearGradient colors={['#F9945E', '#512B58']} style={styles.linearGradient}>
        <SafeAreaView>
        <View>
          <View>
            <Text style={styles.addNewStyle}>
            </Text>
          </View>
          <View>
            <Text>Written By</Text>
            <TouchableOpacity onPress={() => Action.replace('profile')}>
              <View style={styles.buttonStyleOne}>
                <Text style={styles.buttonTextStyle}>Connect With This Person</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => Actions.replace('homeScreen')}>
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Save this Note</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.replace('homeScreen')}>
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Put Back into the PILE</Text>
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
  linearGradient: {
    flex: 1,
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
  }
});

export default NoteOpenedScreen;
