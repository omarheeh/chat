import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firbaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()