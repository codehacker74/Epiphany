/**
 * ProjectSMA - React Native App
 * https://github.com/facebook/react-native
 *
 * Written by Andrew Masters
 * June 21, 2020
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import Router from './src/Router';

class App extends Component {

  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD_EE1m-xSau3L6S5u0AH6029zbDwJ611Q",
      authDomain: "epiphany-bea3a.firebaseapp.com",
      databaseURL: "https://epiphany-bea3a.firebaseio.com",
      projectId: "epiphany-bea3a",
      storageBucket: "epiphany-bea3a.appspot.com",
      messagingSenderId: "1059353876990",
      appId: "1:1059353876990:web:f706303ddd45441dbc88af",
      measurementId: "G-LXHBMCSTGG"
    });
  }

  render() {
    return (
     <>
        <Router />
     </>
    );
  }
}


export default App;
