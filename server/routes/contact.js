const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

router.post('/', async (req, res) => {

  const { name, email, phone, message } = req.body;
  
  try {
    const newMessage = new ContactMessage({ name, email, phone,  message });
    console.log(newMessage)
    await newMessage.save();
    res.status(201).send('Message sent successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
