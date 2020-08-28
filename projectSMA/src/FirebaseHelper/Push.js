import firebase from 'firebase';


// writes a new user into the database
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
  return result;
}


// writes a new post entry into firebase database
async function writeNewPost(text) {
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
  return result;

}

export { addUser, writeNewPost, };
