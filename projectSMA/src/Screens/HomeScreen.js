import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends Component {

  render(){
    return(
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <View>
              <TouchableOpacity onPress={() => Actions.replace('newNote')}>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Open</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => Actions.replace('noteOpened')}>
                <Image source={require('../assets/images/LetterBtn.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => Actions.replace('profile')}>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Button for some purpose</Text>
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

export default HomeScreen;
