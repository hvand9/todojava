import * as firebase from 'firebase/app';
import 'firebase/firebase-firestore';

let config = {
  apiKey: "AIzaSyAxyO39EWjKbxZzN9lyvOt8E-WbSYOD_rU",
    authDomain: "todoaps-d8e0c.firebaseapp.com",
    databaseURL: "https://todoaps-d8e0c.firebaseio.com",
    projectId: "todoaps-d8e0c",
    storageBucket: "todoaps-d8e0c.appspot.com",
    messagingSenderId: "452136941754",
    appId: "1:452136941754:web:34df063c69c1fde9f4aa83",
    measurementId: "G-0S01ZLS7J8"
}

firebase.initializeApp(config);

const db = firebase.firestore()

export { db }