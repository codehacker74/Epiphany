import React, { Component } from 'react';
import { Text, TextInput, View, SafeAreaView, TouchableOpacity, StyleSheet, } from 'react-native';
import { writeNewPost, } from '../FirebaseHelper/Push';
import { Actions } from 'react-native-router-flux';


class NewNoteScreen extends Component {

  componentDidMount() {

  }

  state = {text: "", error: ""}

  async noteSubmitted() {
    const {text} = this.state;
    var result = await writeNewPost(text);

    if (!result) {
      console.log("Post Push - FAILED")
      this.setState(() => { error:'Failed to push the post to the server'})
      return;
    }

    console.log("Post Push - SUCCESSFUL")
    Actions.popTo('homeScreen');
  }

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
                onChangeText={text => this.setState({ text })}
              />
            </View>
            <TouchableOpacity
              onPress={this.noteSubmitted.bind(this)}
              style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Submit to PILE</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignItems: 'center',
  },
  textInputViewStyle: {
    borderWidth: 1,
    margin: 10,
    height: 200,
    width: 300,
  },
  textInputStyle: {
    flex: 1,
    margin: 5,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    textAlignVertical: 'top',
  },
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
  },

});

export default NewNoteScreen;
