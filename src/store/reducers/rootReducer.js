import authReducer from './authReducer';
<<<<<<< HEAD
import projectReducer from './cardReducer';
=======
import cardReducer from './cardReducer';
>>>>>>> 3eb330569215a2249e695c80110879c3208050ea
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  card: cardReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
})

export default rootReducer;