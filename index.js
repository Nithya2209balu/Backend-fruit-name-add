const express = require("express")

const app=express()

var uname = "nithya"
var pass = "123"

app.get("/fruit",function(req,res){
    console.log([req.query.fruitname])
    
    res.send("Login Successfull")
   
})

app.listen(5000,function(){
    console.log("server started..")
})
