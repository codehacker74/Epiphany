import database from 'firebase/database';

const dbRef = database().ref();

database({ postRef })
  .ref('posts/')
  .once(${postRef}, snapshot => {
    return snapshot.val()
  });

function postData({ postRef }){

};

function feedData({ userRef }) {
  const dbRefUsersFriends = database().ref('users/$(userRef)/friends')
    dbRefUsersFriends.once("value")
      .then(function(snapshot) {
        const usersFriends = snapshot.key;
      })

  for(){
    
  }
}
