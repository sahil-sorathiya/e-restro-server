const data = require('./data')
var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

app.get('/',cors(), (req, res) => {
    res.send('Hello World!')
})

app.get('/home', cors(), (req, res) => {
    res.send(data)
})

app.listen(process.env.PORT || port , () => {
    console.log(`Example app listening on port ${port}`)
})