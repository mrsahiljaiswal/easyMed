const express = require('express');
const router = express.Router();
const HealthAssessment = require('../models/HealthAssessment');

// Route to handle health assessment form submission
router.post('/', async (req, res) => {
  const { patientName, patientEmail, patientPhone, symptoms, assessmentDate } = req.body;

  const newHealthAssessment = new HealthAssessment({
    patientName,
    patientEmail,
    patientPhone,
    symptoms,
    assessmentDate,
  });

  try {
    await newHealthAssessment.save();
    res.status(201).json({ message: 'Health assessment recorded successfully', healthAssessment: newHealthAssessment });
  } catch (error) {
    res.status(500).json({ message: 'Error recording health assessment', error });
  }
});

// Route to retrieve all health assessments
router.get('/', async (req, res) => {
  try {
    const healthAssessments = await HealthAssessment.find();
    res.status(200).json(healthAssessments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving health assessments', error });
  }
});

module.exports = router;
