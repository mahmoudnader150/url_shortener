import React, { useState, useEffect } from 'react';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [urlData, setUrlData] = useState([]);

  const handleShorten = async () => {
    try {

        let repeated = false;
        
        fetchAllUrls();
        //If Original url submited before
        urlData.forEach(element => {
          if(element.originalUrl === originalUrl){
            setShortenedUrl(element.shortUrl);
            repeated = true;
            return null;
          }
        });

        if(repeated === false) {
          const response = await fetch('http://localhost:8000/api/shortURL/shorten', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ originalUrl }),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log('Response from server:', data);
            
    
        
            setShortenedUrl(data.shortUrl.shortUrl);
             
            setOriginalUrl('');
            fetchAllUrls();
          } else {
            console.error('Failed to shorten URL');
          }
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
              <td>
                <a href={url.originalUrl} target="_blank" rel="noopener noreferrer">
                  {url.shortUrl}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlShortener;
