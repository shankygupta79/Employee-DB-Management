const Sequelize = require('sequelize')
const db = new Sequelize('empman', 'xyz', 'tony', {
    host:'localhost',
    dialect: 'mysql',
    port:3306,
    omitNull: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Emp = db.define('emps', {
    U_ID:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    ID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    name:Sequelize.STRING,fname:Sequelize.STRING,mname:Sequelize.STRING,
    gender:Sequelize.STRING,
    dob:Sequelize.STRING,
    email:Sequelize.STRING,
    aadhaar:Sequelize.STRING,pan:Sequelize.STRING,
    pnum:Sequelize.STRING,fnum:Sequelize.STRING,mnum:Sequelize.STRING,anum:Sequelize.STRING,
    add1: Sequelize.STRING,
    add2: Sequelize.STRING,
    joindate:Sequelize.STRING,
    des: Sequelize.STRING,
    salary: Sequelize.STRING,
    bname: Sequelize.STRING,ifsc: Sequelize.STRING,accnum: Sequelize.STRING,  
    advance: Sequelize.STRING,
    holidays: Sequelize.STRING,
    balance: Sequelize.STRING,
    transfer: Sequelize.STRING,
    final: Sequelize.STRING,

})
const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    phone:Sequelize.STRING,
    email:Sequelize.STRING,
    password:Sequelize.STRING,
    
})


db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Emp,User
}