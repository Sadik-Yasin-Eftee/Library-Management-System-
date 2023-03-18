const express = require("express");
const mysql = require("mysql");
const cors = require('cors')
const db = require("./database/database.js");
const booklist = require("./models/bookList.js");
const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    return res.json("This is home page");
});

app.get("/booklist", (req,res) => {
    db.query(booklist.seeBookList, (error,data) => {
        if (error){
            console.log(error);
            return res.json(error);
        }
        console.log(res);
        return res.json(data);
    })
})

app.listen(PORT, () => {
    console.log("Connected to port " + PORT);
});

