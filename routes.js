const express= require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

//const filePath = path.join(__dirname, 'data.json')

function decideAlignment (cb) {
    fs.readFile(filePath, 'utf-8', (err, contents) => {
        const alignment = JSON.parse(contents)
        cb(err, alignment)
    })
}

router.get('/', (req, res) => {
    //res.send('Working')
    res.redirect('/marvellous')
})

router.get('/marvellous', (req, res) => {
    res.render('pages/index')
})

router.get('/question', (req, res) => {
    res.render('pages/question')
})

router.post('/marvellous', (req, res) => {
    res.redirect('/question')
})

module.exports = router