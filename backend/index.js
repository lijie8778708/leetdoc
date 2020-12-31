const express = require('express')
const mysql = require('mysql')
const router = express.Router()
const sqlConfig = require('./config/mysql')

const app = express()

mysql.createConnection(sqlConfig).connect((err) => {
  if (err) {
    console.log('something fucked up')
  }
  console.log('we good here')
})

app.listen(3040, () => {
  console.log('ok')
})
