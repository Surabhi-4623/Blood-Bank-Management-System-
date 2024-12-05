const express = require('express');
const bodyParser = require('body-parser');
const donorRoutes = require('./routes/donors');
const firebaseAuth = require('./auth/firebase');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/donors', donorRoutes);

// Firebase authentication (example endpoint)
app.post('/api/login', firebaseAuth.login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
