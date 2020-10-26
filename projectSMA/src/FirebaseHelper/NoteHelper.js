import firebase from 'firebase';
import {GetPileNumber, AddToPile, RemoveFromPile } from './PileHelper';

// writes a new post entry into firebase database
async function writeNewNote(text) {
  var result = false;
  var user = firebase.auth().currentUser;

  if(user != null){

    var newPostKey = await firebase.database().ref().child('posts').push().key;
    await firebase.database().ref().child('users').child(user.uid).child('posts').child(newPostKey).push();

    var postData = {
      uid: user.uid,
      text: text,
      likes: 0,
    };

    var userPostData = {
      [newPostKey]: 'true'
    };

    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/users/' + user.uid + '/posts/' + newPostKey] = 'true';

    await firebase.database().ref().update(updates, function(error) {
      if (error) {
        // the write FAILED
        console.log(error);
      } else {
        console.log("Post Push To Server - SUCCESSFUL");
        result = true;
      }
    });

  } else {
    if(rounds == 3){
      return false;
    }
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);
    result = await writeNewPost(text);
    console.log("made a recursion")
  }

  if (result == true){
    await AddToPile();
  }
  return result;

}

async function getRandomNote() {

  var user = await firebase.auth().currentUser;

  if(user != null){

    var randPost = null;
    var numOfPosts = await GetPileNumber();
    if(numOfPosts == null){
      console.log("randNum was not accessed correctly")
      return null;
    } else if (numOfPosts == 0){
      console.log("Pile is empty!")
      return null;
    }

    console.log("Random Number is...")
    var randNum = Math.floor(Math.random() * numOfPosts);
    console.log(randNum)

    await firebase.database().ref('/posts/').startAt(randNum).limitToLast(1).once('value').then(function(snapshot) {
      randPost = snapshot.val();
    });

    if(randPost != null){
      console.log("Random Post Pulled - SUCCESSFUL");
      return randPost;
    }
    console.log("Random Post Pulled - FAILED");
    return null;
  }

  console.log("No user logged in");
  return null;

};

async function DownloadUsersNotes() {

}

export { writeNewNote, getRandomNote, };
