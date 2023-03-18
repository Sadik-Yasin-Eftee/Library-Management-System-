const express = require("express");
const cors = require('cors')
const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());
module.exports = app;

const homePage = require("./controllers/homePage.js");
const getBooks = require ("./controllers/getBooklist.js");
const addBook = require("./controllers/addBooks.js")

app.listen(PORT, () => {
    console.log("Connected to port " + PORT);
});

