

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { getRandomNote } from '../FirebaseHelper/NoteHelper';

class NoteOpenedScreen extends Component {

  state = {data : []}

  async componentDidMount() {
    this.setState({ data : await getRandomNote() })

    if(this.state.data != null){
      return;
    }
    console.log("Random post data not found");
    Actions.popTo('homeScreen');
  }

  render() {
    return (
      <>
        <LinearGradient colors={['#512B58', '#F9945E']} style={styles.linearGradient}>
        <SafeAreaView>
        <View style={styles.mainViewStyle}>
          <View style={styles.noteViewStyle}>
            <Text style={styles.noteTextStyle}>
              hello
            </Text>
          </View>
          <View style={styles.userViewStyle}>
            <Text style={styles.writtenByStyle}>Written By</Text>
            <Image source={require('../../assets/images/ProfileIcon.png')}/>
            <TouchableOpacity onPress={() => Action.replace('profile')}>
              <View style={styles.buttonConnectStyle}>
                <Text style={styles.connectWithTextStyle}>Connect With This Person</Text>
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
  mainViewStyle: {
    alignItems: 'center',
  },
  noteViewStyle: {
    margin: 30,
  },
  noteTextStyle: {
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    fontSize: 25,
  },
  userViewStyle: {
    justifyContent: 'center'
  },
  writtenByStyle: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 15,
  },
  buttonConnectStyle: {
    height: 50,
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectWithTextStyle: {
    fontFamily: 'Montserrat-Black',
    color: '#F9945E',
    fontSize: 15,
  },
  buttonStyle: {
    height: 60,
    width: 300,
    margin: 15,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: 'white',
  }
});

export default NoteOpenedScreen;
