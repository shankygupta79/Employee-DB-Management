const route = require('express').Router()
const Emp = require('../database').Emp
const path=require('path')
route.get('/',(req,res)=>{
    if (req.session.x!=undefined) {
    res.sendFile(path.join(__dirname,'../views/add_emp.html'))
    }else{
        res.redirect("/login")
    }
})
route.get('/css',(req,res)=>{

    res.sendFile(path.join(__dirname,'../views/add_emp.css'))
    
})
route.get('/info',(req,res)=>{
    if (req.session.x!=undefined) {
    Emp.findAll({where:{U_ID:req.session.x}})
        .then((emps) => {
            res.status(200).send(emps)
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
route.post('/',(req,res)=>{
    Emp.create({
        U_ID:req.session.x,
        name:req.body.name,fname:req.body.fname,mname:req.body.mname,
        gender:req.body.gender,
        dob:req.body.dob,
        email:req.body.email, 
        aadhaar:req.body.aadhaar,pan:req.body.pan,
        pnum:req.body.pnum,fnum:req.body.fnum,mnum:req.body.mnum,anum:req.body.anum,
        add1:req.body.add1,
        add2:req.body.add2,
        joindate:req.body.joindate,
        des:req.body.des,
        salary:req.body.salary,
        bname:req.body.bname,ifsc:req.body.ifsc,accnum:req.body.accnum, 
        advance:0,
        holidays:0,
        balance:req.body.salary,
        transfer:0,
        final:req.body.salary, 
      }).then((user)=>{
        return 
      }).catch((err)=>{
        console.log(err)
        return res.redirect('/dashboard')
      })
})
route.post('/del',(req,res)=>{
    Emp.destroy({
        where: {
           ID:req.body.ID
        }
     }).then(function(rowDeleted){ //returns Number of row deleted
         if(rowDeleted==1){
            return
         }
        
     }).catch((err)=>{
        console.log(err)
        return res.redirect('/dashboard')
    })
})
route.post('/sal',(req,res)=>{
    Emp.update({
        holidays:req.body.holidays,transfer:req.body.transfer,final:req.body.final,
        balance:req.body.balance,advance:req.body.advance
      },{where:{ID:req.body.ID}},
      ).then((user)=>{
        return res.redirect('/salary')
      }).catch((err)=>{
        console.log(err)
        return res.redirect('/dashboard')
      })
})
route.post('/update',(req,res)=>{
    Emp.update({
        name:req.body.name,fname:req.body.fname,mname:req.body.mname,
        gender:req.body.gender,
        dob:req.body.dob,
        email:req.body.email, 
        aadhaar:req.body.aadhaar,pan:req.body.pan,
        pnum:req.body.pnum,fnum:req.body.fnum,mnum:req.body.mnum,anum:req.body.anum,
        add1:req.body.add1,
        add2:req.body.add2,
        joindate:req.body.joindate,
        des:req.body.des,
        salary:req.body.salary,
        bname:req.body.bname,ifsc:req.body.ifsc,accnum:req.body.accnum,
        balance:req.body.salary,final:req.body.salary,  
      },{where:{ID:req.body.ID}},
      ).then((user)=>{
        return res.redirect('/show_emp/only')
      }).catch((err)=>{
        console.log(err)
        return res.redirect('/dashboard')
      })
})
exports=module.exports=route

