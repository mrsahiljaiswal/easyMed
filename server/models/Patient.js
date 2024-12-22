const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  appointmentDate: Date,
  doctorAvailable: Boolean,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
