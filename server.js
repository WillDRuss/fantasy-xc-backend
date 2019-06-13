const express = require('express')
const app = express()

const path = require('path')
const cors = require('cors')
const port = 3001
const runners = require('./controllers/runners.js');

app.use(cors());

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/runners', (req, res) => { runners.runnersHandle(req, res) })

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})
