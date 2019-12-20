import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import rootReducer from './store/reducers/rootReducer';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';	
import fbConfig from './config/fbConfig';

const middlewares = [
	thunk.withExtraArgument({getFirebase, getFirestore})
]

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, 
	compose(
		applyMiddleware(...middlewares),
		// reactReduxFirebase(fbConfig), doesn't work //////////////////!!!!!!!!!
   		reduxFirestore(fbConfig),
	)
)

const app = (
	<Provider store={store}>
		<App />
	</Provider>
	)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
