/**
 * ProjectSMA - React Native App
 * https://github.com/facebook/react-native
 *
 * Written by Andrew Masters
 * June 21, 2020
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, } from 'react-native';
import CategoryIcon from '../Components/CategoryIcon';
import { CategoryListData } from '../Components/CategoryIcon';
import BottomBar from '../Components/BottomBar';

class ProfileScreen extends Component {



  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 1, }}>

        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    margin: 10,
  }
});

export default ProfileScreen;
