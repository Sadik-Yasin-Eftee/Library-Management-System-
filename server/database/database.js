const mysql = require("mysql");
const booklist = require("../models/bookList.js")

const createConnection = mysql.createConnection({
    host : "172.17.0.2",
    // host : "localhost",
    user : "root",
    password : "1234" ,
    database : "lms"   
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
});

module.exports = createConnection;

