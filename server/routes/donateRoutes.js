const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/donate', async (req, res) => {
    const { name, email, amount } = req.body;

    try {
        // Send email to the donor
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Donation Confirmation',
            text: `Thank you for your donation of $${amount}, ${name}!`
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: 'Donation received successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to process donation', error: err.message });
    }
});

module.exports = router;
