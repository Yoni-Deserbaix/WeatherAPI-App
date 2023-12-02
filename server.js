// Import necessary modules
const express = require("express"); // Import Express framework

const app = express(); // Create an Express app instance

const path = require("path"); // Import path module

const PORT = 3000; // Define the port number

const mainGetJS = require("./main-get.js"); // Import the main-get.js file

const API_KEY = require("./public/config.js"); // Import the API key

// Set up the public directory for serving static files
app.use(express.static(path.join(__dirname, "public")));

// Define a route for the root URL
app.get("/", async (req, res) => {
  // Retrieve HTML content asynchronously from main-get.js file
  const mainHTML = await mainGetJS();
  res.send(mainHTML); // Send the retrieved HTML as the response
});

// Start the server to listen on the defined port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
