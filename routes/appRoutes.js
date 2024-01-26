  // routes/appRoutes.js
  const express = require('express');
  const router = express.Router();
  const ShortUrl = require('../models/URLModel');

  // POST route for shortening URLs
  router.post('/shorten', async (req, res) => {
    try {
      const { originalUrl } = req.body;
      const shortUrl = await ShortUrl.create({ originalUrl });
      res.json({ shortUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Redirect route for short URLs
  router.get('/:shortUrl', async (req, res) => {
    try {
      const shortUrl = req.params.shortUrl;
      const urlDoc = await ShortUrl.findOne({ shortUrl });

      if (urlDoc) {
        // Redirect to the original URL
        res.redirect(urlDoc.originalUrl);
      } else {
        res.status(404).json({ error: 'Short URL not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;
