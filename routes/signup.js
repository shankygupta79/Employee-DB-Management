const route = require('express').Router()
const path=require('path')
const User=require('../database').User
route.get('/info',(req,res)=>{
  User.findAll()
  .then((user)=>{
    var arr=[]
    for(let i=0;i<user.length;i++){
      arr.push(user[i].email) 
    }
    return res.send(arr)
  })
})
route.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../views/signup.html'))
})

route.post('/', async (req, res) => {
    User.create({
      name:req.body.name,
      company:req.body.company,
      phone:req.body.phone,
      email:req.body.email,
      password:req.body.password, 
    }).then((user)=>{
      return res.redirect('/login')
    }).catch((err)=>{
      console.log(err)
      return res.redirect('/signup')
    })
 

})

module.exports = route