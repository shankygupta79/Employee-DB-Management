const route = require('express').Router()
const Emp = require('../database').Emp
const path=require('path')
var sno=''
route.get('/',(req,res)=>{
    if (req.session.x!=undefined) {
        res.sendFile(path.join(__dirname,'../views/show_emp.html'))
    }else{
        res.redirect("/login")
    }
})
route.get('/css',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'../views/show_emp.css'))
    
})

route.get('/only',(req,res)=>{
    if (req.session.x!=undefined) {
        res.sendFile(path.join(__dirname,'../views/only.html'))
    }else{
        res.redirect("/login")
    }
    
})
route.get('/info',(req,res)=>{
    Emp.findOne({where:{ID:sno}})
    .then((emp) => {
        res.status(200).send(emp)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send({
            error: "Could not retrive users"
        })
    })
    
})

route.post('/',(req,res)=>{
    sno=req.body.sno
    res.redirect('/show_emp/only')    
})
exports=module.exports=route