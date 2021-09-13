import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyBocg61xxFE7VrsBEe4fr4zT0ucIxKhGVs",
  authDomain: "mec-web-e7b31.firebaseapp.com",
  projectId: "mec-web-e7b31",
  storageBucket: "mec-web-e7b31.appspot.com",
  messagingSenderId: "549500440119",
  appId: "1:549500440119:web:8fa6616354a37f62f279b2",
  measurementId: "G-KN2B9R92N4",
}
// ...

firebase.initializeApp(firebaseConfig)
export default firebase
