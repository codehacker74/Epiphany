import React from 'react';
import { StyleSheet, Text, View, Button, Image, } from 'react-native'
import BottomToolbar from 'react-native-bottom-toolbar';
// import {AntDesign, Entypo, EvilIcons } from 'react-native-vector-icons';
import {Actions} from 'react-native-router-flux';

// const FeedIcon = <Entypo name="newsletter" size={30} color="black" />;
// const ChatIcon = <Entypo name="chat" size={30} color="black" />;
// const ProfileIcon = <Entypo name="user" size={30} color="black" />;
// const SettingsIcon = <EvilIcons name="gear" size={30} color="black" />;

const BottomBar = () => {
  return(
    <View style={styles.barStyle}>
      <BottomToolbar color="black">
        <BottomToolbar.Action
          title="Feed"
          IconElement={ <Image source={require('../../assets/images/FeedIcon.png')} /> }
          onPress={() => Actions.refresh()}
        />
        <BottomToolbar.Action
          title="Chat"
          IconElement={ <Image source={require('../../assets/images/ChatIcon.png')} /> }
          onPress={() => Actions.chatList()}
        />
        <BottomToolbar.Action
          title="Profile"
          IconElement={ <Image source={require('../../assets/images/ProfileIcon.png')} /> }
          onPress={() => Actions.profile()}
        />
        <BottomToolbar.Action
          title="Settings"
          IconElement={ <Image source={require('../../assets/images/SettingsIcon.png')} /> }
          onPress={() => Actions.settings()}
        />
      </BottomToolbar>
    </View>
  );

}

const styles = StyleSheet.create({
  barStyle: {
      flex: 1,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      marginBottom: 20,
  },
});

export default BottomBar;
