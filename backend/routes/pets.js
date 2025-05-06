const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');


  router.get('/', async (req, res) => {
    try {
      const pets = await Pet.find();
      res.json(pets);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post('/pet', async (req, res) => {
    const { name, age, breed, description, image } = req.body;
    try {
      const newPet = new Pet({ name, age, breed, description, image });
      await newPet.save();
      res.status(201).json(newPet);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });


module.exports = router;
