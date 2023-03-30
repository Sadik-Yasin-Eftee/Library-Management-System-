const app = require("../index.js");
const jwt = require('jsonwebtoken');

const authentication = (req,res,next) => {
    const authHeader = req.headers['authentication'];
    if (!authHeader){
        return res.sendStatus(401);
    }
    const token = authHeader.split('')[1];
    jwt.verify(token,'secret-key',(err,user) => {
        if (err){
            console.log(err);
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}

module.exports = authentication;