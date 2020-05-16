import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAqBD3zqpNxmHDYJM1OehpLkxoPNFP4Sa4",
    authDomain: "projectlistreact.firebaseapp.com",
    databaseURL: "https://projectlistreact.firebaseio.com",
    projectId: "projectlistreact",
    storageBucket: "projectlistreact.appspot.com",
    messagingSenderId: "246588004471",
    appId: "1:246588004471:web:c7f8da6b1d85cc04f44e72",
    measurementId: "G-SVMDN78D3G"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;