const express = require('express')
const hbs = require('express-handlebars')
const server = express()

const router = require('./routes.js')

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

server.use('/', router)

module.exports = server