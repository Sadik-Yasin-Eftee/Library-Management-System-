const mysql = require("mysql");

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

exports.connection;

