const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/contact', async (req, res) => {
    const { sender, message, email, subject } = req.body;
    const service = process.env.EMAIL_SERVICE;
    const host = process.env.EMAIL_HOST;
    const port = process.env.EMAIL_PORT;
    const user = process.env.EMAIL_USER;
    const pw = process.env.EMAIL_PW;

    try {
        const transporter = nodemailer.createTransport({
            service: service,
            host: host,
            port: port,
            secure: true,
            auth: {
                user: user,
                pass: pw,
            },
        });

        const mailOptions = {
            from: user,
            to: user,
            subject: subject,
            text: 
            `Reply To: ${email}\n` +
            `From: ${sender}\n\n` +
            `${message}`,
        };

        transporter.sendMail(mailOptions, (error, info) => 
        {
            if (error) {
                console.error("Error sending email: ", error);                
            } else {
                console.log("Email sent: ", info.response);
            }
        });

        res.json("message sent");
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error when sending message.');
    }
});

module.exports = router;