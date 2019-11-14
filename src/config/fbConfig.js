 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth'
 
 var firebaseConfig = {
  apiKey: "AIzaSyDCXZtSc8mHUh2yoCFTRXqpVN_WqCEumJg",
  authDomain: "taragona-fb.firebaseapp.com",
  databaseURL: "https://taragona-fb.firebaseio.com",
  projectId: "taragona-fb",
  storageBucket: "taragona-fb.appspot.com",
  messagingSenderId: "830379951526",
  appId: "1:830379951526:web:814f80c9e72f72d988bb67"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;