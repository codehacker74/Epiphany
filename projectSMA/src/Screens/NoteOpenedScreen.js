import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {Text, View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

class NoteOpenedScreen extends Component {

  render() {
    return (
      <>
        <SafeAreaView>
        <View>
          <TouchableOpacity onPress={() => Actions.replace('noteWaiting')}>
            <View style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Save Post</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.replace('noteWaiting')}>
            <View style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Put Back</Text>
            </View>
          </TouchableOpacity>
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

export default NoteOpenedScreen;
