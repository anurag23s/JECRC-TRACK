import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAnTW3WFfq9JSAm9cTsbFkHOwEUj5RD694",
    authDomain: "database-1afa1.firebaseapp.com",
    databaseURL: "https://database-1afa1-default-rtdb.firebaseio.com",
    projectId: "database-1afa1",
    storageBucket: "database-1afa1.appspot.com",
    messagingSenderId: "943135706436",
    appId: "1:943135706436:web:a90b97439366e9873c5b11"
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
export const app=initializeApp(firebaseConfig);
export const auth1 = getAuth(app);
export const db1 = getDatabase(app);




