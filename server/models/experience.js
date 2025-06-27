const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    company: String,
    title: String,
    start: Date,
    end: Date,
    descriptions: [{ type: String }],
    skills: [{ type: String }],
});

module.exports = mongoose.model('Experience', experienceSchema);