const route = require('express').Router()
const User = require('../database').User
const path=require('path')

route.get('/info',(req,res)=>{
  if (req.session.x!=undefined) {
    var arr
    User.findOne(
      { where: {id: req.session.x} }
    ).then(user => {
       arr=user
       res.send(arr)
    })
    
  }else{
    console.log("redirecting")
    return res.redirect("http://localhost:3989/login")
  }
  
})
route.get('/', async (req, res) => {
  if (req.session.x!=undefined) {
    return res.sendFile(path.join(__dirname,'../views/dashboard.html'))
  } else {
    res.redirect('/login')
  }

})
module.exports = route