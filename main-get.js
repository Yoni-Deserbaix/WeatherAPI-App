// main-get.js

const { readFile } = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(readFile);

const READ_OPTIONS = { encoding: "utf-8" };

module.exports = async (API_KEY) => {
  try {
    // Utilisez API_KEY ici pour les appels API, si nécessaire
    const content = await readFileAsync("./index.html", READ_OPTIONS);
    return content;
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
};
