require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

console.log('Allowed Origin:', process.env.FRONT_URI);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: process.env.FRONT_URI,
  credentials: true
}));
app.options('*', cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB failed to connect:', err);
});

const contactRoutes = require('./routes/contact');
const infoRoutes = require('./routes/info');
const projectRoutes = require('./routes/projects');
const settingsRoutes = require('./routes/settings');
app.use('/api', contactRoutes);
app.use('/api', infoRoutes);
app.use('/api', projectRoutes);
app.use('/api', settingsRoutes);

console.log('About to start server...');
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

// Optional: Log endpoints
const listEndpoints = require('express-list-endpoints');
console.log(listEndpoints(app));
