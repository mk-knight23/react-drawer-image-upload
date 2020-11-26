import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCTHVvejKd59JqHj5V1kLuVJE3WMoUOB6s",
  authDomain: "mkclock.firebaseapp.com",
  databaseURL: "https://mkclock.firebaseio.com",
  projectId: "mkclock",
  storageBucket: "mkclock.appspot.com",
  messagingSenderId: "622121225035",
  appId: "1:622121225035:web:be70eb91eb4af1f8f3f6ce"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}
