const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

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

// Route to check doctor availability and suggest available slots
router.get('/available-slots', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    const availableSlots = doctors.flatMap(doctor => doctor.availableSlots);
    res.status(200).json(availableSlots);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving available slots', error });
  }
});

// Route to notify patient when doctor is available and send meeting URL
router.post('/notify-doctor-availability', async (req, res) => {
  const { appointmentId, doctorId } = req.body;

  try {
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    appointment.doctorAvailable = true;
    await appointment.save();

    // Generate a random room ID for Jitsi
    const roomId = uuidv4();
    const meetingUrl = `https://meet.jit.si/${roomId}`;

    // Send email with meeting URL
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: appointment.patientEmail,
      subject: 'Doctor Appointment Meeting URL',
      text: `Your appointment is confirmed. Join the meeting using the following URL: ${meetingUrl}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Patient notified about doctor availability', appointment, meetingUrl });
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

// Book an appointment
router.post('/api/appointments/book', async (req, res) => {
    const { name, email, specialty, date, timeRange } = req.body;

    try {
        const doctor = await Doctor.findOne({ specialization: specialty });
        if (!doctor) {
            return res.status(404).json({ message: 'No doctor found with the given specialization' });
        }

        const roomId = uuidv4();
        const jitsiLink = `https://meet.jit.si/${roomId}`;

        // Send email to patient and doctor
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: `${email}, ${doctor.email}`,
            subject: 'Appointment Booking Confirmation',
            text: `Your appointment has been booked. Join the meeting using the following link: ${jitsiLink}`
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: 'Appointment booked successfully', jitsiLink });
    } catch (err) {
        res.status(500).json({ message: 'Appointment booked successfully, but failed to send email', jitsiLink: `https://meet.jit.si/${uuidv4()}` });
    }
});

module.exports = router;
