  const mongoose = require('mongoose');

  const petSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    description: String,
    image: String,
    adopted: { type: Boolean, default: false },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  });

  module.exports = mongoose.model('Pet', petSchema);
