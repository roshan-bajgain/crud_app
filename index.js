const express = require("express");
const mongoose = require("mongoose")
const app = express()

app.use(express.json());

app.get('/', function(req,res){
    res.send("Hello I am Roshan bajgain from jhapa and arjundhara.")
})

app.post('/api/products', (req,res)=>{
    res.send("Data Rerieve")
})



mongoose.connect("mongodb+srv://roshanbazgain:0RtBkcMM4UOrS9Wr@backenddb.69jdb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=> {
    console.log("Connected to the database");
    app.listen(3000, ()=> {
        console.log("Server is running on port 3000")
    })
})
.catch(()=> {
    console.log("Connection failed");
})