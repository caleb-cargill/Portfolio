require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const infoRoutes = require('./routes/info');
const projectRoutes = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.FRONT_URI,
    credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB failed to connect:', err);
});

app.use('/api', contactRoutes);
app.use('/api', infoRoutes);
app.use('/api', projectRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});