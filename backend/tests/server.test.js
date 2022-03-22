const app = require('../server')
const supertest = require('supertest')

test("Root path should response the GET method", async () => {
  const response = await supertest(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toEqual('Hello World sup yo ok now!')
});