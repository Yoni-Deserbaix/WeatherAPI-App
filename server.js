// server.js

const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;
const mainGetJS = require("./main-get.js");

const API_KEY = require("./public/config.js"); // Import de la clé API

// Définir le dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  const mainHTML = await mainGetJS(API_KEY); // Passer la clé API en tant qu'argument
  res.send(mainHTML);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
