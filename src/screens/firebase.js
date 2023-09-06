import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebase = {
    apiKey: "AIzaSyA0xlJovyMEAUeXfkeFQZndNF5sMNPZdMA",
    authDomain: "jt-db-682b5.firebaseapp.com",
    databaseURL: "https://jt-db-682b5-default-rtdb.firebaseio.com",
    projectId: "jt-db-682b5",
    storageBucket: "jt-db-682b5.appspot.com",
    messagingSenderId: "959561125777",
    appId: "1:959561125777:web:67bf37007fc99db440d430",
    measurementId: "G-Z1BXZXNZYD"
};

// Initialize Firebase app
const app = initializeApp(firebase);

// Get Firebase Auth instance
const auth1 = getAuth(app);

// Get Firebase Database instance
const db1 = getDatabase(app);

// Export the initialized app, authentication, and database instances
module.exports = {
    app,
    auth1,
    db1
};
