const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection setup
const MONGODB_URI = 'mongodb://mahnader222:<password>@cluster0.ulxpe2f.mongodb.net/?retryWrites=true&w=majority'; 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, MERN Stack!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
