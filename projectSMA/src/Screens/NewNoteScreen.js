import React, { Component } from 'react';
import { Dimensions, Text, TextInput, View, SafeAreaView, TouchableOpacity, StyleSheet, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { writeNewNote, } from '../FirebaseHelper/NoteHelper';
import { Actions } from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');
const lineLimit = 180;

class NewNoteScreen extends Component {

  componentDidMount() {

  }

  state = {text: "", error: ""}

  async noteSubmitted() {
    const {text} = this.state;
    var result = await writeNewNote(text);

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
        <LinearGradient colors={['#512B58', '#F9945E']} style={{flex: 1}}>
          <SafeAreaView>
            <View style={styles.mainViewStyle}>
              <View style={styles.titleViewStyle}>
                <Text style={styles.titleTextStyle}>Note:</Text>
              </View>
              <View style={styles.textInputViewStyle}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="write something new..."
                  placeholderTextColor="gray"
                  multiline={true}
                  maxLength={lineLimit}
                  onChangeText={text => this.setState({ text })}
                />
              </View>
              <View style={styles.submitBtnViewStyle}>
                <TouchableOpacity
                  onPress={this.noteSubmitted.bind(this)}
                  style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Submit to PILE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  submitBtnViewStyle: {
    margin: "10%"
  },
  titleViewStyle: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginTop: '5%',
  },
  titleTextStyle: {
    color: 'white',
    fontFamily: 'Montserrat-Black',
    fontSize: 20,
  },
  textInputViewStyle: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'white',
    margin: 10,
    height: height*0.3,
    width: width*0.8,
  },
  textInputStyle: {
    margin: 7,
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    textAlignVertical: 'top',
    color: 'white',
    height: height*0.3,
    width: width*0.748,
  },
  buttonStyle: {
    height: height*0.07,
    width: width*0.4,
    margin: 20,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
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
