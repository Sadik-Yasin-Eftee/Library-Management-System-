const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser")
const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
module.exports = app;

const homePage = require("./controllers/homePage.js");
const getBooks = require ("./controllers/getBooklist.js");
const addBook = require("./controllers/addBooks.js");
const deleteBook = require("./controllers/deleteBook.js")

app.listen(PORT, () => {
    console.log("Connected to port " + PORT);
});

