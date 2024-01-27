const express = require('express');
const router = express.Router();
const ShortUrl = require('../models/URLModel'); // Import your ShortUrl model

router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  try {
    // Check if shortUrl already exists
    const existingShortUrl = await ShortUrl.findOne({ shortUrl: originalUrl });

    if (existingShortUrl) {
      // Handle the case when the shortUrl already exists (generate a new one, etc.)
      // For simplicity, let's append a random string to the original shortUrl
      const newShortUrl = originalUrl + '-' + Math.random().toString(36).substring(7);

      // Create a new ShortUrl document with the updated shortUrl
      const newShortUrlDoc = new ShortUrl({ originalUrl, shortUrl: newShortUrl });
      await newShortUrlDoc.save();

      res.json({ shortUrl: newShortUrlDoc });
    } else {
      // Create a new ShortUrl document
      const shortUrlDoc = new ShortUrl({ originalUrl });
      await shortUrlDoc.save();

      res.json({ shortUrl: shortUrlDoc });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/all', async (req, res) => {
  try {
    const allUrls = await ShortUrl.find();
    res.json(allUrls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
