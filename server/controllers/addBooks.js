const app = require("../index.js");
const db = require("../database/database.js");
const add = require("../models/addBook.js");

const addBook = app.post("/addBooks",(req,res) => {
    var name = req.body.bookName;
    var author = req.body.authorName;
    var genre = req.body.genre;
    db.query(add.add,[name,author,genre],(error,data) => {
        if (error){
            console.log(error);
            return res.json(error)
        }
        console.log("Book added successfully");
        res.redirect("/bookList");
    });
});

module.exports = addBook