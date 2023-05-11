require('dotenv').config()
const data = require('./data')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
}))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send(data)
})

app.listen(process.env.PORT || port , () => {
    console.log(`Example app listening on port ${port}`)
})
