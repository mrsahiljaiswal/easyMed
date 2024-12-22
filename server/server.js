// server/server.js
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const healthRoutes = require('./routes/healthRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const donationRoutes = require('./routes/donationRoutes');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Firebase Admin
const serviceAccount = require('./firebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Middleware to verify Firebase token
const verifyIdToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];
  if (!idToken) return res.status(401).send('Unauthorized');

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }
};

// Protected route
app.get('/protected', verifyIdToken, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});

// Use new routes
app.use('/api/health-assessment', healthRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/donations', donationRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
