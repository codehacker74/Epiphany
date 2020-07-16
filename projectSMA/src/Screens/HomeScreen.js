/**
 * ProjectSMA - React Native App
 * https://github.com/facebook/react-native
 *
 * Written by Andrew Masters
 * June 21, 2020
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, ScrollView, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CategoryIcon from '../Components/CategoryIcon';
import { CategoryListData } from '../Components/CategoryIcon';
import BottomBar from '../Components/BottomBar';

class HomeScreen extends Component {



  render() {
    return (
      <>
        <SafeAreaView style={{ }}>

          <View style={ styles.categoryStyle }>
            <CategoryIcon label="New Topics" />
            <CategoryIcon label="Idea Time" />
            <CategoryIcon label="More Categories..." />
          </View>

          <View style={styles.lineStyle}/>

          <ScrollView style={styles.scrollStyle}>

          </ScrollView>

        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    flex: 1,

  },
  categoryStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  lineStyle: {
    alignContent: 'stretch',
    backgroundColor: '#F9945E',
    height: 2,
  },

});

export default HomeScreen;
