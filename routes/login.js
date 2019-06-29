const route = require('express').Router()
const User = require('../database').User
const path=require('path')
const ld=require('./logindata').x
route.get('/', (req, res) => {

  res.sendFile(path.join(__dirname,'../views/login.html'))

})
route.get('/img1', (req, res) => {
  res.sendFile(path.join(__dirname,'../views/img.jpeg'))
})
route.get('/img2', (req, res) => {
  res.sendFile(path.join(__dirname,'../views/img2.jpeg'))
})
route.get('/img3', (req, res) => {
  res.sendFile(path.join(__dirname,'../views/img3.jpeg'))
})
route.get('/css', (req, res) => {
  res.sendFile(path.join(__dirname,'../views/css.css'))
})
route.post('/', async (req, res) => {
  
  User.findOne(
    { where: {email: req.body.email} })
  .then(user => {
    if(user==null){ 
      ld[0]=true
        return res.sendFile(path.join(__dirname,'../views/login.html'))
    }
    if (user.password == req.body.password) {
      ld[0]=false
      ld[1]=false
      req.session.x = user.id
      console.log("Feed")
      return res.redirect('/dashboard')
    } else {
      ld[1]=true
      ld[0]=false
      return res.redirect("/login")
    }
  })
  
  

})
route.get('/data',(req,res)=>{
  res.send(ld)
})

module.exports = route