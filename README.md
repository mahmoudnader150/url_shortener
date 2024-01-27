# URL Shortener App

The URL Shortener App is a simple web application that allows users to shorten long URLs into more manageable and shareable short URLs. It is built using React for the front end, Node.js and Express for the backend, and MongoDB as the database.

## Features

1. **Shorten URL:** Enter a long URL, and the app will generate a short URL for you.

2. **Reuse Short URLs:** If you enter the same original URL, the app will reuse the existing short URL associated with that URL.

3. **View Shortened URLs:** View a list of all shortened URLs with their original and short URLs in a table.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd url-shortener-app
   ```

3. Install dependencies for both the server and client:

   ```bash
   cd server
   npm install

   cd ../client
   npm install
   ```

4. Set up MongoDB:

   - Create a MongoDB database and update the connection string in `server/.env`.

5. Run the app:

   ```bash
   cd server
   npm start

   cd ../client
   npm start
   ```

   - The server will run on `http://localhost:8000` and the client on `http://localhost:3000`.

## Usage

1. Open your browser and go to `http://localhost:3000`.

2. Enter a long URL in the input field and click the "Shorten" button.

3. View the shortened URL and the list of all shortened URLs in the table.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.
