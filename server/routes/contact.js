const express = require('express');
const router = express.Router();

router.post('/contact', async (req, res) => {
    const { sender, message, email, subject } = req.body;

    try {

        console.log("message sent");
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error when sending message.');
    }
});

module.exports = router;