import React, { Component } from 'react';
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class REpiphanyScreen extends Component {

  render(){
    return(
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <TouchableOpacity onPress={() => Actions.rPostOpened()}>
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Open</Text>
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

export default REpiphanyScreen;
