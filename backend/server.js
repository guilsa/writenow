const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World sup yo ok now!')
})

module.exports = app
