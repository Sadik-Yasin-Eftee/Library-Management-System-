const express = require("express");
const app = express();
const connection = require ("./database/database.js");
const PORT = 3001;

app.listen(PORT, () => {
    console.log("Connected to port " + PORT);
});

