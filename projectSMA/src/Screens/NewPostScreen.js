import React, { Component } from 'react';
import { Text, TextInput, View, SafeAreaView, TouchableOpacity, StyleSheet, } from 'react-native';

class NewPostScreen extends Component {

  render(){
    return(
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.mainViewStyle}>
            <View style={styles.textInputViewStyle}>
              <TextInput
                style={styles.textInputStyle}
                placeholder="write something new..."
                placeholderTextColor="gray"
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignContent: 'center',
  },
  textInputViewStyle: {
    borderWidth: 1,
    margin: 10,
    height: 200,
  },
  textInputStyle: {
    flex: 1,
    margin: 5,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    textAlignVertical: 'top',
  }

});

export default NewPostScreen;
