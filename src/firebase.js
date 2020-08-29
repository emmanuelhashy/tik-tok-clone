import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDSOC3pmS6dgAfkSfUL-Z0NHya6JgrrMpE",
//     authDomain: "tik-tok-clone-f94c0.firebaseapp.com",
//     databaseURL: "https://tik-tok-clone-f94c0.firebaseio.com",
//     projectId: "tik-tok-clone-f94c0",
//     storageBucket: "tik-tok-clone-f94c0.appspot.com",
//     messagingSenderId: "553236120434",
//     appId: "1:553236120434:web:40238268aec3717e8cd3eb",
//     measurementId: "G-TB3YQY8XQ0"
// };
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDSOC3pmS6dgAfkSfUL-Z0NHya6JgrrMpE",
    authDomain: "tik-tok-clone-f94c0.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-f94c0.firebaseio.com",
    projectId: "tik-tok-clone-f94c0",
    storageBucket: "tik-tok-clone-f94c0.appspot.com",
    messagingSenderId: "553236120434",
    appId: "1:553236120434:web:40238268aec3717e8cd3eb",
    measurementId: "G-TB3YQY8XQ0"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };