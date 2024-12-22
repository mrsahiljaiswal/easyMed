const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/kys', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Send email to the admin
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: 'KYS Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: 'KYS form submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to submit KYS form', error: err.message });
    }
});

module.exports = router;
