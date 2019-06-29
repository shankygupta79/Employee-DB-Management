const route = require('express').Router()

route.get('/', (req, res) => {

    res.redirect('/login')


})

module.exports = route