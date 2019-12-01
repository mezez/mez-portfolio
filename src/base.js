import Rebase from 're-base'; //used to mirror state to firebase
import firebase from 'firebase'; //used to mirror state to firebase

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCj1CD1ORE4L5ek9fQhds4LxuGEIkBqFLY",
    authDomain: "learn-react-mez.firebaseapp.com",
    databaseURL: "https://learn-react-mez.firebaseio.com",
    // projectId: "learn-react-mez",
    // storageBucket: "learn-react-mez.appspot.com",
    // messagingSenderId: "988633063385",
    // appId: "1:988633063385:web:5dda695e6d2506917503c8",
    // measurementId: "G-15H1NP092H"

});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//default export
export default base;