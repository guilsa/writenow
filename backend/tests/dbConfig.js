const fs = require('fs')

const fileToRemove = './db/writenow_test.sqlite3'

function initialize() {}

function clear() {
  removeFile(fileToRemove)
  console.log('Clearing database...')
}

function removeFile(path) {
  try {
    fs.unlinkSync(path)
  } catch (err) {
    console.error(err)
  }
}

const testCase = { initialize, clear }

module.exports = testCase
