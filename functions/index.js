const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

//setup routes...
app.get('/test', (req, res) => {
  res.send('Wow, it actually worked.')
})

app.get('/anotherone', (req, res) => {
  res.send('This one works too')
})

app.post('/add-one', (req, res) => {
    res.send('add this one as well')    
})

app.post('/addnew', (req, res) => {
    res.send('new feature')    
})

app.get('/confusedkinda', (req, res) => {
  res.send('Too many branches')
})

app.get('/notconfused', (req, res) => {
  res.send('this is crazy')
})

//trying to make some changes



exports.api = functions.https.onRequest(app)


