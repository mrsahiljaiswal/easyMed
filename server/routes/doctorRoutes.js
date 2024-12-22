const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Get all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific doctor
router.get('/:id', getDoctor, (req, res) => {
    res.json(res.doctor);
});

// Create a doctor
router.post('/', async (req, res) => {
    const doctor = new Doctor({
        name: req.body.name,
        specialization: req.body.specialization,
        availability: req.body.availability,
        // ...other fields...
    });
    try {
        const newDoctor = await doctor.save();
        res.status(201).json(newDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a doctor
router.patch('/:id', getDoctor, async (req, res) => {
    if (req.body.name != null) {
        res.doctor.name = req.body.name;
    }
    if (req.body.specialization != null) {
        res.doctor.specialization = req.body.specialization;
    }
    if (req.body.availability != null) {
        res.doctor.availability = req.body.availability;
    }
    // ...other fields...
    try {
        const updatedDoctor = await res.doctor.save();
        res.json(updatedDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a doctor
router.delete('/:id', getDoctor, async (req, res) => {
    try {
        await res.doctor.remove();
        res.json({ message: 'Deleted Doctor' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getDoctor(req, res, next) {
    let doctor;
    try {
        doctor = await Doctor.findById(req.params.id);
        if (doctor == null) {
            return res.status(404).json({ message: 'Cannot find doctor' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.doctor = doctor;
    next();
}

module.exports = router;
