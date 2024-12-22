const mongoose = require('mongoose');

const healthAssessmentSchema = new mongoose.Schema({
  patientName: String,
  patientEmail: String,
  patientPhone: String,
  symptoms: [String],
  assessmentDate: Date,
});

const HealthAssessment = mongoose.model('HealthAssessment', healthAssessmentSchema);

module.exports = HealthAssessment;
