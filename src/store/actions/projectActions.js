import * as actionTypes from './actionsTypes';

export const testReq = (data) => {
	return (dispatch, getState, {getFirebase, getFirestore }) => {
		

		const firestore = getFirestore();
		firestore.collection('projects').add({
			name: 'Worker'
		}).then(()=>{
			dispatch({type: 'TEST_REQ', data: data})
			
		}).catch((err)=>{
			// dispatch error
		})

	}
}
