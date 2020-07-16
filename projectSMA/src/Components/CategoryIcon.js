/**
 * ProjectSMA - React Native App
 * https://github.com/facebook/react-native
 *
 * CategoryIcon.js - Creates the style for the categories that are on the Feed
 *    menu. Uses a label that will connect to an array of categories.
 * Written by Andrew Masters
 * June 21, 2020
 */

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const CategoryIcon = ( {label, link} ) => {
  return (
    <>
    <TouchableOpacity
      onPress={() => Actions.rEpiphany()}>
      <View style={styles.iconStyle}>
        <LinearGradient colors={[ '#F9945E', '#512B58']} style={styles.linearGradient}>
          <Text style={styles.textStyle} >{label}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: 'white',
    margin: 20,
    height: 75,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  textStyle: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 10,

  }
});


export default CategoryIcon;
