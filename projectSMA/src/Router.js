/**
 * ProjectSMA - React Native App
 * https://github.com/facebook/react-native
 *
 * Written by Andrew Masters
 * June 21, 2020
 */

import React from 'react'
import {Image, Text} from 'react-native'
import { Scene, Router, Stack, Tabs, Actions, ActionConst, Lightbox, } from 'react-native-router-flux';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import ChatListScreen from './Screens/ChatListScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import REpiphanyScreen from './Screens/REpiphanyScreen';
import NewPostScreen from './Screens/NewPostScreen';
import ReviewPostScreen from './Screens/ReviewPostScreen';
import RPostOpenedScreen from './Screens/RPostOpenedScreen';


const RouterComponent = () => {
  return (
    <Router>
        <Scene key="root">
          <Scene initial hideNavBar key="login">
            <Scene hideNavBar key="loginScreen" component={LoginScreen} title="login" />
            <Scene hideBackImage key="rEpiphany" component={REpiphanyScreen} title="Welcome to the PILE"
            headerMode={'REpiphanyScreen'}
            onRight={() => Actions.newPost()}
            rightButtonImage={require('../assets/images/NewPostIcon.png')}/>
            <Scene key="newPost" component={NewPostScreen} title="New Post" />
            <Scene key="rPostOpened" component={RPostOpenedScreen} title="Post Opened" />
          </Scene>

          <Scene key="main" type={ActionConst.RESET} headerMode={'HomeScreen'}>
            <Scene initial key="tabs" tabs={true} init={true} type={ActionConst.REPLACE}>
              <Scene
                init={true}
                key="home"
                component={HomeScreen}
                headerMode={'HomeScreen'}
                title="Feed"
                onRight={() => Actions.newPost()}
                rightButtonImage={require('../assets/images/NewPostIcon.png')}
              />
              <Scene key="chatList" component={ChatListScreen} title="Chat"/>
              <Scene key="settings" component={SettingsScreen} title="Settings"/>
              <Scene key="profile" component={ProfileScreen} title="Profile"/>
            </Scene>

            <Scene key="rEpiphany" component={REpiphanyScreen} title="Open A Note"/>
            <Scene key="newPost"
              component={NewPostScreen}
              title="Write A New Post"
              onRight={() => Actions.reviewPost()}
              rightTitle="Next"
              />
              <Scene key="reviewPost" component={ReviewPostScreen} title="Review post"/>
            <Scene
              key="rPostOpened"
              component={RPostOpenedScreen}
              title="Post"
              />
            </Scene>
        </Scene>

    </Router>
  );
};

export default RouterComponent;

// <Tabs key="tabBar" tabBarComponent={HomeScreen}>
//   <Scene key="home" component={HomeScreen} title="Feed"/>
//   <Scene key="chatList" component={ChatListScreen} title="Chat"/>
//   <Scene key="settings" component={SettingsScreen} title="Settings"/>
//   <Scene key="profile" component={ProfileScreen} title="Profile"/>
// </Tabs>
