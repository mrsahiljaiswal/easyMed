// firebase-admin.js
const admin = require('firebase-admin');

// Path to your service account key (downloaded JSON file)
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Correct path to your JSON file

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Optional: If using Firebase Realtime Database
  // databaseURL: 'https://your-database-name.firebaseio.com'
});

module.exports = admin;
