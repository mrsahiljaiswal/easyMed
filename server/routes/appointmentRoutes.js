const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Route to handle appointment form submission
router.post('/', async (req, res) => {
  const { patientName, patientEmail, patientPhone, appointmentDate } = req.body;

  const newAppointment = new Appointment({
    patientName,
    patientEmail,
    patientPhone,
    appointmentDate,
    doctorAvailable: false, // Initially set to false
  });

  try {
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ message: 'Error booking appointment', error });
  }
});

// Route to notify patient when doctor is available
router.post('/notify-doctor-availability', async (req, res) => {
  const { appointmentId } = req.body;

  try {
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    appointment.doctorAvailable = true;
    await appointment.save();

    // Here you can add code to send notification to the patient (e.g., email or SMS)

    res.status(200).json({ message: 'Patient notified about doctor availability', appointment });
  } catch (error) {
    res.status(500).json({ message: 'Error notifying patient', error });
  }
});

// Route to retrieve all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving appointments', error });
  }
});

module.exports = router;
