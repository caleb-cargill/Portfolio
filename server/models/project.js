const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    imageName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    sourceCodeLink: {
        type: String,
        required: false
    },
    demoLink: {
        type: String,
        required: false
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    priority: {
        type: Number,
        default: 0
    },
    tags: [{ type: String }],
    languages: [{ type: String }]
    }, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
