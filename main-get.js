// Import required modules
const { readFile } = require("fs");
const { promisify } = require("util");

// Promisify the readFile function to make it work asynchronously
const readFileAsync = promisify(readFile);

// Define options for reading the file with UTF-8 encoding
const READ_OPTIONS = { encoding: "utf-8" };

// Export an asynchronous function
module.exports = async () => {
  try {
    // Read the content of the index.html file asynchronously using the defined options
    const content = await readFileAsync("./index.html", READ_OPTIONS);
    return content; // Return the content once read successfully
  } catch (error) {
    // Handle errors that occur during the file reading process
    console.error("Error reading file:", error);
    throw error; // Throw the encountered error
  }
};
