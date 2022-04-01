const data = require('./data')
var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000


app.use(cors({
    origin: process.env.CORS_ORIGIN
}))


app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log(req);
    console.log(res);
})

app.get('/home', (req, res) => {
    res.send(data)
})

app.listen(process.env.PORT || port , () => {
    console.log(`Example app listening on port ${port}`)
})
