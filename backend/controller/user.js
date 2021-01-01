const resJson = require('../response/response')
const db = require('../sql/connection')
const sql = require('../sql/sql')
db.connect(() => {
  console.log('ok')
})

const signUp = async (req, res, next) => {
  const { username, password } = req.body

  db.query(sql.user.select, [username], (err, result) => {
    if (result[0] === null) {
      console.log(result)
      result = 'undefined'
      resJson(res, result)
    } else {
      db.query(sql.user.insert, [username, password], (err, result) => {
        console.log(result)
        if (result) {
          result = 'add'
        } else {
          result = 'undefined'
        }
        resJson(res, result)
      })
    }
  })
}

const login = async (req, res, next) => {
  const { username, password } = req.body

  db.query(sql.user.select, [username], (err, result) => {
    if (result) {
      console.log(result[0].password)
      if (password === result[0].password) {
        result = 'select'
      } else {
        result = 'undefined'
      }
      // token
    }
    resJson(res, result)
  })
}

exports.signUp = signUp
exports.login = login
