const app = require("../index.js");
const db = require("../database/database.js");
const sql = require("../models/deleteBook.js");
const authenticate = require('./middleware.js')

const deleteBook = app.delete("/booklist/:id",authenticate,(req,res) =>{
    var bookid = req.params.id;
    db.query(sql.deleteBook,[bookid], (err,data) =>{
        if (err){
            console.log(err);
        } else {
            // Renumber the IDs in the database
            db.query("SET @count = 0", (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    db.query("UPDATE books SET id = @count:= @count + 1", (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("IDs renumbered successfully");
                        }
                    });
                }
            });
            return res.json(data);
        }
    })
})

