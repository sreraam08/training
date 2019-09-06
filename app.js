const express=require('express')
const app =express()
const bodyparser=require('body-parser')
const mangoose=require('mangoose')

//Connecting to mangoose
mangoose.connect('mangodb://localhost/ipl');
const db=mangoose.connection

app.get('/',(req,res)=>{
    res.send('Hello World');
})


app.listen(3000,()=>console.log('Listening port no 3000...'))