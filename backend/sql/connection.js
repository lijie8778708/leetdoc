const mysql = require('mysql')
const sqlConfig = require('../config/mysql')

module.exports = mysql.createConnection(sqlConfig)
