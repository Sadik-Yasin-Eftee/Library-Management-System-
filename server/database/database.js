const mysql = require("mysql");
const booklist = require("../models/bookList.js")

const createConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234"    
});

const connection = createConnection.connect((error) => {
    if (error) {
        return console.log(error);
    }
    console.log("Connected to the database")
});

createConnection.query(booklist.seeBookList, (error,res) => {
    if (error){
        return console.log(error);
    }
    return console.log(res);
})

exports.connection;

