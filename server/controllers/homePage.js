const app = require("../index.js");

app.get("/",(req,res) => {
    return res.json("This is home page");
});