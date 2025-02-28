import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebase = {
  apiKey: "AIzaSyDHXZL2BvX2eqZ2ZTrbEAIloSzQDCoN-a0",
  authDomain: "db07-02-25.firebaseapp.com",
  databaseURL: "https://db07-02-25-default-rtdb.firebaseio.com",
  projectId: "db07-02-25",
  storageBucket: "db07-02-25.firebasestorage.app",
  messagingSenderId: "714823244626",
  appId: "1:714823244626:web:154250335c27902ea3b88b"
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
