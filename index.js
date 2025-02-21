const express = require("express");
const app = express()

app.get('/', function(req,res){
    res.send("Hello I am Roshan bajgain")
})

app.listen(3000)