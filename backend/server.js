const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// See explicit closing:
// https://github.com/JoshuaWise/better-sqlite3/issues/580
const db = require('./db/index')

app.get('/', (req, res) => {
  res.send('Hello World sup yo ok now!')
})

app.get('/api/journals', (req, res) => {
  try {
    const stmt = db.prepare('select * from journals')
    const journals = stmt.all()
    res.send({ journals })
  } catch {
    console.log('err', err)
  }
})

app.get('/api/journals/completedDays', (req, res) => {
  const result = ['2022-03-22']
  res.send({ completedDays: result })
})

app.post('/api/journal/', (req, res) => {
  try {
    const { content, wordCount, id } = req.body
    const stmt = db.prepare('UPDATE journals SET (content, wordCount) = (?, ?) WHERE id = ?')
    const update = stmt.run(content, wordCount, id)
    res.send({})
  } catch (err) {
    console.log('err', err)
  }
})

module.exports = app
