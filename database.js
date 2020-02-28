const Sequelize = require('sequelize')
//'database792', 'database792', 'hello3878','db4free.net'

const db = new Sequelize('eFx6DJVPM2', 'eFx6DJVPM2', 'XDIawT0voC', {
    host:'remotemysql.com',
    dialect: 'mysql',
    port:3306,
  operatorsAliases: false,
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
    land:Sequelize.STRING,
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
const Data = db.define('datas', {
    U_ID:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    ID:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    name:Sequelize.STRING,
    des:Sequelize.STRING,
    salary: Sequelize.STRING,
    advance: Sequelize.STRING,
    holidays: Sequelize.STRING,
    balance: Sequelize.STRING,
    transfer: Sequelize.STRING,
    final: Sequelize.STRING,
    month:Sequelize.STRING,
    year:Sequelize.STRING,
    date:{type:Sequelize.STRING,primaryKey:true},
    
    
})


db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Emp,User,Data
}
