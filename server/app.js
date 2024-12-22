const express = require('express');
const app = express();
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const donateRoutes = require('./routes/donateRoutes');
const kysRoutes = require('./routes/kysRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/donate', donateRoutes);
app.use('/api/kys', kysRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
