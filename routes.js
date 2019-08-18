const express= require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

const filePath = path.join(__dirname, 'data.json')

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

router.get('/marvellous/question', (req, res) => {
    decideAlignment ((err, anything => {
        if (err) return res.sendStatus(500)
        res.render('pages/question')
        console.log(anything)
    }))
})

router.post('/marvellous/question', (req, res) => {
    res.render('pages/question')
})

router.get('/marvellous/result', (req, res) => {
    res.render('pages/result')
})

router.post('/marvellous/result', (req, res) => {
    decideAlignment((err, anything) => {
        anything.personalinput.name = req.body.name
        if (err) {
            return res.sendStatus(500)
        }
        const json = JSON.stringify(anything, null, 2)
        fs.writeFile(filePath, json, err => {
            if (err) {
                return err
            }
        })
        res.render('pages/result', anything.personalinput)
    })
})

module.exports = router