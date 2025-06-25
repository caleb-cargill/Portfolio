const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Get all projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ priority: 1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get spotlight project
router.get('/projects/spotlight', async (req, res) => {
    try {
        const spotlightProject = await Project.findOne({ isFeatured: true });
        if (!spotlightProject) {
            return res.status(404).json({ message: 'No spotlight project found' });
        }
        res.json(spotlightProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 