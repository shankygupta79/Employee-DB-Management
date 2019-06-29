const express = require('express');
const session = require('express-session')
const SERVER_PORT=process.env.PORT || 3989
const path=require('path')
const app = express();

app.set('views', path.join(__dirname, 'views/'));
app.use((req, res, next) => {
    next()
})
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'something very very secret'
  }))
  
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));
app.use('/logout', require('./routes/logout'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/myacc',require('./routes/myacc'))
app.use('/', require('./routes/root'));
app.use('/add_emp',require('./routes/add_emp'))
app.use('/show_emp',require('./routes/show_emp'))
app.use('/salary',require('./routes/salary'))
app.listen(SERVER_PORT, function () {
    console.log("Server started on http://localhost:3989/login");
});
//taskkill/f/im node.exe