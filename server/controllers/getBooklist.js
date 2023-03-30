const app = require("../index.js");
const db = require("../database/database.js");
const booklist = require("../models/bookList.js");
const authenticate = require("./middleware.js");

const fetchData = app.get("/booklist",authenticate,(req,res) => {
    db.query(booklist.seeBookList,(error,data) => {
        if (error){
            console.log(error);
            return res.json(error);
        }
        console.log(res);
        return res.json(data);
    })
})

module.exports = fetchData;