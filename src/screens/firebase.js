import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebase = {
  apiKey: "AIzaSyCIl5crzedJqD0BLWAQidICFt2v8iuE3Y4",
  authDomain: "jt1504-8a0a8.firebaseapp.com",
  projectId: "jt1504-8a0a8",
  storageBucket: "jt1504-8a0a8.appspot.com",
  messagingSenderId: "943029802227",
  appId: "1:943029802227:web:ee351ea321914ed1345386"

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
