const express = require('express');
const router = express.Router();
const Settings = require('../models/settings');

// Get Settings
router.get('/settings', async (req, res) => {
    try {
        const settings = await Settings.findOne();
        if (!settings) {
            return res.status(404).json({ message: 'Settings not found'});
        }
        res.json(settings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;