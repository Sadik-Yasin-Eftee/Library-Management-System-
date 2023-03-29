const app = require("../index.js");
const bcyprt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../database/database.js");
const sql = require('../models/userRegistration');

const register = app.post('/register', (req,res) => {
    const {name,email,password} = req.body;

    if (!name||!email||!password){
        return res.status(400).json({message: 'Please provide name, email and password'});
    }

    const salt = bcyprt.genSaltSync(10);
    const hashPass = bcyprt.hashSync(password,salt);

    db.query(sql.newUser, [name, email, hashPass], (error,data) => {
        if (error){
            console.log(error);
            return res.status(500).json({message: 'Server error'});
        }
        console.log(data);
        
        const token = jwt.sign({email},'secret-key');
        return res.json({message:'User created',token});
    });
})

module.exports = register;