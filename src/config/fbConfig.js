import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


let config = {
	apiKey: "AIzaSyBqyuDPnKvDsJkRD8G1bT96N4XYy-2Y8_I",
	projectId: "timecatcher-46ce0",
}

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;