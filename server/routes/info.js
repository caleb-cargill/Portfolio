const express = require('express');
const router = express.Router();
const Experience = require('../models/experience');
const Project = require('../models/Project');

router.get('/experiences', async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.json(experiences);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching experiences', error });
    }
});

module.exports = router;