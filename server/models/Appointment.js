const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  patientEmail: String,
  patientPhone: String,
  appointmentDate: Date,
  doctorAvailable: Boolean,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
