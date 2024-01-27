const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const URLSchema = new Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

const ShortUrl = mongoose.model('ShortUrl', URLSchema);  // Use 'ShortUrl' as the model name
module.exports = ShortUrl;  // Export the model
