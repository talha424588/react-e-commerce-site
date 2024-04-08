import firebase from 'firebase/compat/app'; // Updated import statement
import 'firebase/compat/storage'; // Updated import statement

// Firebase configuration
const firebaseConfig ={
    apiKey: "<apiKey>",
    authDomain: "googleapis.com",
    projectId: "e-commerce-site-3d959",
    storageBucket: "gs://e-commerce-site-3d959.appspot.com",
    messagingSenderId: "<messagingSenderId>",
    appId: "<appId>",
    measurementId: "<measurementId>",
    databaseURL: "https://e-commerce-site-3d959.firebaseio.com" // Add this line for Realtime Database
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
