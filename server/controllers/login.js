const app = require("../index.js");
const bcyprt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../database/database.js");
const sql = require('../models/emailCheck.js');

const login = app.post('/login',(req,res) => {
    const {email,password} = req.body;

    if (!email||!password){
        return res.status(400).json({message:'Please provide both email and password'});
    }

    db.query(sql.emailIsPresent,[email],(error,data)=>{
        if (error){
            console.log(error);
            return res.status(500).json({message:'Server error'});
        }
        console.log(data);
        if (!data){
            return res.json({message:'Authetication failed'});
        }
        const userInfo = data[0];
        const userPass = userInfo.password;

        const isValid = bcyprt.compareSync(password,userPass);

        if (!isValid){
            return res.status(400).json({message: 'Wrong information'});
        }
        const token = jwt.sign({email},'secret-key');
        return res.json({message:'Login successful',token});
    });
    module.exports = login;
});