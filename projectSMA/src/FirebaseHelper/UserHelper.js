import firebase from 'firebase';
import {AddToPile} from './PileHelper'


// writes a new user to the firebase database
async function addUser(firstName, lastName, rounds) {

  var result = false;
  var user = firebase.auth().currentUser;

  if(user != null){

    await user.updateProfile({
      displayName: [firstName] + ' ' + [lastName]

    }).then(function() {
      console.log("User Profile Display Name Set To");
      console.log(user.displayName);

    }).catch(function(error) {

      console.log(error)
    });

    // Add user uid to database
    await firebase.database().ref().child('users').child(user.uid).push();

    // FIRST POST DATA
    var newPostKey = await firebase.database().ref().child('posts').push().key;

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var firstPostText = 'You Joined On ' + month + '/' + day + '/' + year;

    var postData = {
      uid: user.uid,
      text: firstPostText,
      likes: 0,
    };

    var userData = {
      provider: 'firebase',
      posts: {
        [newPostKey]: 'true'
      }
    };

    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/users/' + user.uid] = userData;

    await firebase.database().ref().update(updates, function(error) {
      if (error) {
        // the write FAILED
        console.log(error);
      } else {
        console.log("Initial User Info Add to DB - SUCCESSFUL");
        result = true;
      }
    });

  } else {
    if(rounds == 3){
      return false;
    }
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);
    result = await addUser(firstName, lastName, rounds+1);
    console.log("made a recursion")
  }
  // ADD To Posts In the PILE
  if(result == true){
    await AddToPile();
  }

  return result;
}


// pulls all user info from firebase database
async function PullUserInfo() {

  var user = firebase.auth().currentUser;

  if(user != null) {
    var userName = user.displayName;
    var userNotes = null;


    await firebase.database().ref('/users/' + user.uid + '/posts').once('value').then(function(snapshot) {
      userNotes = snapshot.val()
    });

    var userData = {
      name: userName,
      notes: {
        userNotes
      }
    };
    console.log("Download Profile - SUCCESS")
    return userData;

  }

  console.log("Download Profile - FAIL")
  return null;

}

export {addUser, PullUserInfo, }
