const route = require('express').Router()
const Emp = require('../database').Emp
const path=require('path')
var sno=''
route.get('/',(req,res)=>{
    if (req.session.x!=undefined) {
        res.sendFile(path.join(__dirname,'../views/salary.html'))
    }else{
        res.redirect("/login")
    }
})
route.get('/css',(req,res)=>{
    if (req.session.x!=undefined) {
        res.sendFile(path.join(__dirname,'../views/table.css'))
    }else{
        res.redirect("/login")
    }
})


exports=module.exports=route