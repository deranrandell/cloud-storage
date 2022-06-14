import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDSJ5WcyaanvaYUMcTJpuhCSBHrvLwIjEA",
  authDomain: "deranrandell-cloud-storage.firebaseapp.com",
  projectId: "deranrandell-cloud-storage",
  storageBucket: "deranrandell-cloud-storage.appspot.com",
  messagingSenderId: "601490411376",
  appId: "1:601490411376:web:1e9a30a2f2c461b402c9b5"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
