const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String, 
    isFeatured: Boolean,
    priority: Number,
    tags: [{ type: String }],
    sourceCodeLink: String,
    demoLink: String,
    imageName: String,
    imageCaption: String
});

module.exports = mongoose.model('Project', projectSchema);