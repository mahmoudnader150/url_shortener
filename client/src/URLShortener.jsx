import React, { useState } from 'react';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShorten = async () => {
    // Your URL shortening logic goes here
    // You may use a URL shortening API or your own backend service

    // For demonstration purposes, let's assume a simple mock function
    const mockShortenUrl = (url) => {
      // Replace this with your actual URL shortening logic
      return 'http://short.url/abc123';
    };

    const shortUrl = await mockShortenUrl(originalUrl);
    setShortenedUrl(shortUrl);
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <label>
        Original URL:
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
      </label>
      <button onClick={handleShorten}>Shorten</button>
      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
