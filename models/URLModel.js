// Importing necessary modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating the URLSchema
const URLSchema = new Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Creating and exporting the URL model
const URL = mongoose.model('URL', URLSchema);
module.exports = URL;
