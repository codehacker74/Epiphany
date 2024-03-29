/**
 * ProjectSMA - React Native App
 * https://github.com/facebook/react-native
 *
 * Written by Andrew Masters
 * June 21, 2020
 */

import React from 'react'
import {Image, Text, StyleSheet} from 'react-native'
import { Scene, Router, Stack, Tabs, Actions, ActionConst, Lightbox, } from 'react-native-router-flux';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import ChatListScreen from './Screens/ChatListScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import NewNoteScreen from './Screens/NewNoteScreen';
import ReviewNoteScreen from './Screens/ReviewNoteScreen';
import NoteOpenedScreen from './Screens/NoteOpenedScreen';
import EditProfileScreen from './Screens/EditProfileScreen';


const RouterComponent = () => {
  return (
    <Router style={styles.navStyle}>
        <Scene key="root">
          <Scene initial hideNavBar key="login">
            <Scene hideNavBar type='replace' key="loginScreen" component={LoginScreen} />
            <Scene hideNavBar type='replace' key="registerScreen" component={RegisterScreen} />
            <Scene key="homeScreen" component={HomeScreen} title="EPIPHANY"
            hideNavBar={false}
            type='replace'
            onLeft={() => Actions.push('profile')}
            leftButtonImage={require('../assets/images/ProfileIcon.png')}
            onRight={() => Actions.push('chatList')}
            rightButtonImage={require('../assets/images/ChatIcon.png')}/>

            <Scene key="newNote" component={NewNoteScreen} title="New Note"
            hideNavBar={false} />

            <Scene key="noteOpened" component={NoteOpenedScreen} title="Note Opened"
            hideNavBar={false}
            type='replace' />

            <Scene key="profile" component={ProfileScreen} title="Profile"
            hideNavBar={false}
            onRight={() => Actions.chatList()}
            rightButtonImage={require('../assets/images/ChatIcon.png')} />

            <Scene key="editProfile" component={EditProfileScreen} title="Edit Profile"
            hideNavBar={false}/>

            <Scene key="settings" component={SettingsScreen} title="Settings"
            hideNavBar={false} />

            <Scene key="chatList" component={ChatListScreen} title="Chat"
            hideNavBar={false} />

          </Scene>
        </Scene>

    </Router>
  );
};

const styles = StyleSheet.create({
  navStyle: {

  },

});

export default RouterComponent;

// <Tabs key="tabBar" tabBarComponent={HomeScreen}>
//   <Scene key="home" component={HomeScreen} title="Feed"/>
//   <Scene key="chatList" component={ChatListScreen} title="Chat"/>
//   <Scene key="settings" component={SettingsScreen} title="Settings"/>
//   <Scene key="profile" component={ProfileScreen} title="Profile"/>
// </Tabs>
