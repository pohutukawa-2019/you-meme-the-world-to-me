const express= require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

//const filePath = path.join(__dirname, 'data.json')

router.get('/', (req, res) => {
    //res.send('Working')
    res.redirect('marvellous')
})

router.get('/marvellous', (req, res) => {
    res.render('pages/index')
})

//questions

router.get('/marvellous', (req, res) => {
    res.render('marvellous')


    //res.send('working')
    
})

router.get('/' (req, res) => {
    //res.send('working')
    res.render('pages/questions')
})

router.get('/', (req, res) => {
    //res.send('Working')
    res.render('marvellous')
})

router.get('/marvellous', (req, res) => {
    res.render('pages/results')
})
module.exports = router
