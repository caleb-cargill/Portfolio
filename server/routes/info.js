const express = require('express');
const router = express.Router();
const Experience = require('../models/experience');
const Project = require('../models/project')

router.get('/experiences', async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.json(experiences);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching experiences', error });
    }
});

router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching projects', error });
    }
});

module.exports = router;