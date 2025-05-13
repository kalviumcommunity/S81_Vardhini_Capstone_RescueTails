    const mongoose = require('mongoose');

    const petSchema = new mongoose.Schema({
      name: String,
      age: Number,
      breed: String,
      description: String,
      image: String,
      adopted: { type: Boolean, default: false }
    });

    module.exports = mongoose.model('Pet', petSchema);
