import {combineReducers} from 'redux';
// reducers
import project from './projects/reducer';
import {firestoreReducer as firestore} from 'redux-firestore';

export default combineReducers({
  project,
  firestore
});