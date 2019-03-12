import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyBANNZzKxC1u8xu0c7tOzcPrF_C0zkRZ-I",
  authDomain: "eugene-khristo-marioplan.firebaseapp.com",
  databaseURL: "https://eugene-khristo-marioplan.firebaseio.com",
  projectId: "eugene-khristo-marioplan",
  storageBucket: "eugene-khristo-marioplan.appspot.com",
  messagingSenderId: "329345532524"
};

firebase.initializeApp(config);

export default firebase;