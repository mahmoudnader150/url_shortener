import React, { useState, useEffect } from 'react';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [urlData, setUrlData] = useState([]);

  const handleShorten = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/shortURL/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        setShortenedUrl(data.shortUrl.shortUrl);
        // Fetch and update the table data after shortening
        fetchAllUrls();
      } else {
        console.error('Failed to shorten URL');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchAllUrls = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/shortURL/all');
      if (response.ok) {
        const data = await response.json();
        setUrlData(data);
      } else {
        console.error('Failed to fetch URLs');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Fetch initial data on component mount
    fetchAllUrls();
  }, []);

  return (
    <div>
      <h1>URL Shortener</h1>
      <label>
        Original URL:
        <br />
        <input
          name='fullURL'
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
      </label>
      <button onClick={handleShorten}>Shorten</button>

      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={originalUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}

      <h2>Shortened URLs</h2>
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
          </tr>
        </thead>
        <tbody>
          {urlData.map(url => (
            <tr key={url._id}>
              <td>{url.originalUrl}</td>
              <td>{url.shortUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlShortener;
