import firebase from 'firebase';

async function getRandomPost() {

  var userID = await firebase.auth().currentUser.uid;

  await firebase.database().ref('/users/' + userID + '/posts/').once('value').then(function(snapshot) {
    var randNum = Math.floor(Math.random() * snapshot.numChildren());
    console.log("Random Number...")
    console.log(randNum)
    var data = snapshot.val();
    var randPost = data[randNum];
  });

  if(randPost != null){
    console.log("Random Post Pulled - SUCCESSFUL");
    return randPost;
  }
  console.log("Random Post Pulled - FAILED");
  return null;
};

async function getAllUserPosts() {


};

async function getFeedPosts() {

};

async function pullUserInfo() {

  var dict = {};
  var user = await firebase.auth().currentUser;

  dict[name] = user.displayName;
  dict[image] = user.photoURL;

  // await firebase.database().ref('/users/' + userID)

  return dict;
};

export {getRandomPost, getAllUserPosts, getFeedPosts, pullUserInfo };
