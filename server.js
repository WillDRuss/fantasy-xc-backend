const express = require('express')
const app = express()

const path = require('path')
// const cors = require('cors')
const port = 3001
const runners = require('./json_files/runners.json')

// app.use(cors());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/runners', (req, res) => {
    res.send(runners)
})

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})
