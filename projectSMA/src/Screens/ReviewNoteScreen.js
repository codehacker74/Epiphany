import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, StyleSheet, } from 'react-native';

class ReviewNoteScreen extends Component {

  render() {
    return(
      <>
        <SafeAreaView>
          <View style={styles.mainViewStyle}>
            <TouchableOpacity>
              <View style={styles.btnStyle}>
                <Text style={styles.btnTextStyle}>Add Note to PILE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnStyle}>
                <Text style={styles.btnTextStyle}>Submit Note</Text>
              </View>
            </TouchableOpacity>
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
  pileBtnStyle: {
    margin: 10,
  },
  btnStyle: {
    height: 40,
    width: 150,
    borderRadius: 5,
    backgroundColor: '#F9945E',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  btnTextStyle: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',

  },
});

export default ReviewNoteScreen;
