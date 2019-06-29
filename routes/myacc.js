const route = require('express').Router()
const User = require('../database').User
const path=require('path')
route.get('/',(req,res)=>{
    if (req.session.x!=undefined) {
    res.sendFile(path.join(__dirname,'../views/myacc.html'))
    }else{
        res.redirect("/login")
    }
})
route.get('/css',(req,res)=>{

    res.sendFile(path.join(__dirname,'../views/myacc.css'))
    
})
route.post('/update',(req,res)=>{
    User.update(
        {   name: req.body.name,
            password: req.body.password,
            phone: req.body.phone,
            company: req.body.company,
            email:req.body.email,
        },
        {where: {id: req.body.id} }
      ).then(function() {
        
      }).catch( function(err){
        res.status(499).send({
           error: "Could retrieve user"
       })
    })
})
exports=module.exports=route

