const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  const { name, email, phone, service } = req.body;
  
  try {
    const newBooking = new Booking({ name, email, phone, service });
    console.log(newBooking)
    await newBooking.save();
    res.status(201).send('Booking confirmed');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
