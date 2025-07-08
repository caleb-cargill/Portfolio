const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    missionStatement: {
        type: String,
        required: true        
    },
    impactStatement: {
        type: String,
        required: true,        
    },
    aboutMeOne: {
        type: String,
        required: true
    },
    aboutMeTwo: {
        type: String,
        required: true
    },
    aboutMeImgOne: {
        type: String,
        required: true
    },
    aboutMeImgTwo: {
        type: String,
        required: true
    },
    siteLogoUrl: {
        type: String,
        required: true
    },
    siteFaviconUrl: {
        type: String,
        required: true
    },
    headshotImageUrl: {
        type: String,
        required: true
    },
    socialLinks: {
        github: { type: String, required: false },        
        linkedin: { type: String, required: false },
        email: { type: String, required: false },
        blog: { type: String, required: false },
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Settings', settingsSchema);