const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// Route to handle donation form submission
router.post('/', async (req, res) => {
  const { donorName, donorEmail, donorPhone, donationAmount, donationDate } = req.body;

  const newDonation = new Donation({
    donorName,
    donorEmail,
    donorPhone,
    donationAmount,
    donationDate,
  });

  try {
    await newDonation.save();
    res.status(201).json({ message: 'Donation recorded successfully', donation: newDonation });
  } catch (error) {
    res.status(500).json({ message: 'Error recording donation', error });
  }
});

// Route to retrieve all donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving donations', error });
  }
});

module.exports = router;
