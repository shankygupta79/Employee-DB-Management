const route = require('express').Router()
const Data = require('../database').Data
const path=require('path')
route.get('/info',(req,res)=>{
    if (req.session.x!=undefined) {
        Data.findAll({where:{U_ID:req.session.x}})
            .then((datas) => {
                res.status(200).send(datas)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).send({
                    error: "Could not retrive users"
            })
        })}else{
            return res.redirect('/login')
        }
    
})
route.get('/',(req,res)=>{
    if (req.session.x!=undefined) {
    res.sendFile(path.join(__dirname,'../views/data.html'))
    }else{
        res.redirect("/login")
    }
})
exports=module.exports=route