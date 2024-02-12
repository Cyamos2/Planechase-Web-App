const express = require('express');
const router = express.Router();

// Example plane cards data
const planeCards = require('../data/planeCards.json');

// Route to get all plane cards
router.get('/plane-cards', (req, res) => {
  res.json(planeCards);
});

// Route to get a specific plane card by name
router.get('/plane-cards/:name', (req, res) => {
  const { name } = req.params;
  const card = planeCards.find(card => card.name === name);
  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ message: 'Plane card not found' });
  }
});

// Add more routes for creating, updating, and deleting plane cards if needed

module.exports = router;
