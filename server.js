const express = require('express')
const app = express()

const path = require('path')
const port = 3001
const runners = require('./json_files/runners.json')



app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/runners', (req, res) => {
    res.json(runners)
})

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})
