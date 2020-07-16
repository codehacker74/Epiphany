import firebase from 'firebase';

const loginUser = ({ email, password }) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      return false;
    });
  return true;
};

const logoutUser = () => {

};

export { loginUser, logoutUser };
