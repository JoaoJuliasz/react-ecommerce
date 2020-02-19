import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCeMxPifA7S8ZMWUpqyISIDibnZYjLkHIw",
    authDomain: "cwrn-db-c84ca.firebaseapp.com",
    databaseURL: "https://cwrn-db-c84ca.firebaseio.com",
    projectId: "cwrn-db-c84ca",
    storageBucket: "cwrn-db-c84ca.appspot.com",
    messagingSenderId: "136595277188",
    appId: "1:136595277188:web:0a855e72d464b561ec89d1",
    measurementId: "G-SJCWHVH4XD"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase