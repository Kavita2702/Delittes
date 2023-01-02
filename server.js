const express=require('express')
const app=express()
app.get('/',function(req,res){
    res.send("Delite MNC : requirement of interanet web service");
})
app.listen(7566,function(req,res){
    console.log("welcome to Delittes");
})
