import firebase from 'firebase';
import { addUser } from './Push';

var returnState;
var user;

const checkUser = () => {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      return true;
    } else {
      // No user is signed in.
      return false;
    }
  });

}

async function createNewUser( email, password, firstName, lastName ) {
  await firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(() => {
      console.log("Creating User Failed")
      return false;
    });
  console.log("user auth successsful")

  var result = await addUser(firstName, lastName, 0);

  if(result){
    console.log("USER FULLY CREATED")
    return true;
  }
  return false;
};

async function loginUser( email, password ) {
  await firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      console.log("LOGIN FAILED")
      return false;
    });
  console.log("LOGIN SUCCESSFUL")

  return true;
}

const logoutUser = () => {
  firebase.auth().signOut()
    .catch(() => {
      console.log("SIGNOUT FAILED")
      return false;
    });
  console.log("SIGNOUT SUCCESSFUL")
  return true;
};

export { checkUser, loginUser, logoutUser, createNewUser, };
