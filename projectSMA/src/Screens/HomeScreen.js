import React, { Component } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');


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
                  <Text style={styles.button2TextStyle}>Find Friends</Text>
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
    flex: 1,
  },
  secondViewStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: "8%",
  },
  thirdViewStyle: {
    justifyContent: 'space-around',
    marginTop: "35.5%",
  },
  button1Style: {
    height: height*0.09,
    width: width*0.75,
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
    height: height*0.07,
    width: width*0.4,
    marginHorizontal: "3%",
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
