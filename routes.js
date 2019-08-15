const express= require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

//const filePath = path.join(__dirname, 'data.json')

router.get('/', (req, res) => {
    //res.send('Working')
    res.redirect('/marvellous')
})

router.get('/marvellous', (req, res) => {
    res.render('pages/index')
})

module.exports = router