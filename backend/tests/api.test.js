const app = require('../server')
const supertest = require('supertest')

// const testDatabase = require('./db.config.js')
// beforeAll(() => testDatabase.initialize())
// afterAll(() => testDatabase.clear())

test('GET root', async () => {
  const response = await supertest(app).get('/')
  expect(response.statusCode).toBe(200)
  expect(response.text).toEqual('Hello World sup yo ok now!')
})

test('GET /api/journals', async () => {
  const response = await supertest(app).get('/api/journals')
  expect(response.statusCode).toBe(200)
  expect(response.body.journals).toBeInstanceOf(Object)
})

test('GET /api/journals/completedDays', async () => {
  const response = await supertest(app).get('/api/journals/completedDays')
  expect(response.statusCode).toBe(200)
  expect(response.body.completedDays).toBeInstanceOf(Array)
})

test('POST /api/journal', async () => {
  const response = await supertest(app)
    .post('/api/journal')
    .send({ content: 'content from test 2 hahaha', wordCount: 50, id: 6 })
    .set('Accept', 'application/json')
  expect(response.statusCode).toBe(200)
})
