const express = require('express');
const router = express.Router();
const emailjs = require('@emailjs/browser');

router.post('/contact', async (req, res) => {
    const { sender, message, email, subject } = req.body;
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const key = process.env.EMAILJS_PUBLIC_KEY;

    try {
        console.log("sending message");
        emailjs.send(serviceId, templateId, {
            name: sender,
            message: message,
            reply_to: email,
            subject: subject,
        }, {
            publicKey: key,
            blockHeadless: true,
        });
        console.log("message sent");
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error when sending message.');
    }
});

module.exports = router;