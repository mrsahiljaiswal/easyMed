const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: String,
  donorEmail: String,
  donorPhone: String,
  donationAmount: Number,
  donationDate: Date,
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
