const app = require("../index.js");
const db = require("../database/database.js");
const sql = require("../models/updateBook.js");

const updateBook = app.put('/updateBook/:id',(req,res) => {
    var bookId = req.params.id;
    var params = [
        req.body.bookName,
        req.body.authorName,
        req.body.genre
    ]
    db.query(sql.updateBook,[...params,bookId],(err,data) => {
        if (err){
            console.log(err);            
        }
        else{
            console.log("Book updated successfully");
            res.redirect("/booklist");
        }
    });
});

module.exports = updateBook