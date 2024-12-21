// firebase-admin.js
const admin = require('firebase-admin');

// Path to your service account key (downloaded JSON file)
const serviceAccount = require('./path/to/serviceAccountKey.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
 
});

module.exports = admin;
