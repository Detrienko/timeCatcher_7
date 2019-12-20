import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';

import businessListReducer from './businessList';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
	businessList: businessListReducer,
	userReducer: userReducer,
	sessionReducer: sessionReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer
});

export default rootReducer;