const data = require('./data')
var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000


app.use(cors({
    origin: 'https://nostalgic-wright-d50289.netlify.app'
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