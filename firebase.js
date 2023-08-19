const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getDatabase } = require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyAnTW3WFfq9JSAm9cTsbFkHOwEUj5RD694",
    authDomain: "database-1afa1.firebaseapp.com",
    databaseURL: "https://database-1afa1-default-rtdb.firebaseio.com",
    projectId: "database-1afa1",
    storageBucket: "database-1afa1.appspot.com",
    messagingSenderId: "943135706436",
    appId: "1:943135706436:web:a90b97439366e9873c5b11"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

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
