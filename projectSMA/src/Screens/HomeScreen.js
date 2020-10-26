import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends Component {

  render(){
    return(
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.mainStyle}>
            <View style={styles.secondViewStyle}>
              <TouchableOpacity onPress={() => Actions.push('newNote')}>
                <View style={styles.button2Style}>
                  <Text style={styles.button2TextStyle}>My Posts</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.push('newNote')}>
                <View style={styles.button2Style}>
                  <Text style={styles.button2TextStyle}>Friends</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.thirdViewStyle}>
              <TouchableOpacity onPress={() => Actions.replace('noteOpened')}>
                <Image source={require('../../assets/images/LetterBtn.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.thirdViewStyle}>
              <TouchableOpacity onPress={() => Actions.push('newNote')}>
                <View style={styles.button1Style}>
                  <Text style={styles.button1TextStyle}> Write A New Note</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  secondViewStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  thirdViewStyle: {
    justifyContent: 'space-around',
    marginTop: 130,
  },
  button1Style: {
    height: 80,
    width: 300,
    margin: 20,
    backgroundColor: '#F9945E',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1TextStyle: {
    fontFamily: 'Montserrat-Black',
    fontSize: 18,
    color: 'white',
  },
  button2Style: {
    height: 60,
    width: 150,
    margin: 20,
    borderColor: '#512B58',
    borderRadius: 10,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2TextStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#512B58',
  },
});

export default HomeScreen;
