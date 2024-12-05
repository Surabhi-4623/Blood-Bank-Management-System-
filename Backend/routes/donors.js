const express = require('express');
const router = express.Router();
const client = require('../database');
const { v4: uuidv4 } = require('uuid');

// Add a donor
router.post('/', async (req, res) => {
  const { name, blood_type, location, contact } = req.body;
  const query = `INSERT INTO donors (id, name, blood_type, location, contact) VALUES (?, ?, ?, ?, ?)`;
  const params = [uuidv4(), name, blood_type, location, contact];

  try {
    await client.execute(query, params, { prepare: true });
    res.status(201).send('Donor added successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get donors by location
router.get('/:location', async (req, res) => {
  const query = `SELECT * FROM donors WHERE location = ?`;
  try {
    const result = await client.execute(query, [req.params.location], { prepare: true });
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
