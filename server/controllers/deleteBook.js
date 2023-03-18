const app = require("../index.js");
const db = require("../database/database.js");
const sql = require("../models/deleteBook.js")

const deleteBook = app.delete("./booklist/:id", (req,res) =>{
    var bookid = req.params.id;
    db.query(sql.deleteBook,[bookid], (err,data) =>{
        if (err){
            console.log(err);
        }
        return res.json(data);
    })
})