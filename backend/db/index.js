const Database = require('better-sqlite3')

let databaseName = 'writenow.sqlite3'

const db = new Database(`./db/${databaseName}`)

module.exports = db
