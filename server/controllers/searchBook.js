const app = require("../index.js");
const db = require("../database/database.js");
const sql = require("../models/searchBook.js");

const search = app.get('/searchBook', (req,res) => {
   const { query } = req.query;
   const params = [
      `%${query}%`,
      `%${query}%`,
      `%${query}%`
   ];
   db.query(sql.searchBook, params, (err, results) => {
      if (err) {
         console.log(err);
         res.status(500).send('Internal Server Error');
      } else {
         res.status(200).json(results);
      }
   }); 
});
