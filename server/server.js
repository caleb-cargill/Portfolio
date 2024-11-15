require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.FRONT_URI,
    credentials: true
}));
app.use(express.json());

console.log(`Accepting requests from ${process.env.FRONT_URI}`);

app.use('', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});