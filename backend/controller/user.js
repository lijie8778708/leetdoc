const resJson = require('../response/response')
const db = require('../sql/connection')
const sql = require('../sql/sql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const env = require('../config/env')

db.connect(() => {
  console.log('ok')
})

const signUp = (req, res, next) => {
  let { username, password } = req.body
  let ret
  db.query(sql.user.select, [username], async (err, result) => {
    if (result.length !== 0) {
      ret = 'fail'
      resJson(res, ret, { msg: 'user existed' })
    } else {
      try {
        password = await bcrypt.hash(password, 6)
        db.query(sql.user.insert, [username, password], (err, result) => {
          if (result) {
            ret = 'save'
            const token = jwt.sign(
              {
                username,
              },
              env.JWT_KEY,
              { expiresIn: '30d' }
            )
            result = { token }
          } else {
            ret = 'fail'
            result = { msg: err.message }
          }
          resJson(res, ret, result)
        })
      } catch (err) {
        console.log(err)
        ret = 'fail'
        resJson(res, ret, result)
      }
    }
  })
}

const login = async (req, res, next) => {
  let { username, password } = req.body
  let ret
  db.query(sql.user.select, [username], async (err, result) => {
    if (result[0]) {
      try {
        isValidPassword = await bcrypt.compare(password, result[0].password)

        if (isValidPassword) {
          ret = 'find'
          const token = jwt.sign(
            {
              username,
            },
            env.JWT_KEY,
            { expiresIn: '30d' }
          )
          result = { token }
        } else {
          ret = 'fail'
          result = { msg: 'Invalid username or password' }
        }
      } catch (err) {
        console.log(err)
        ret = 'fail'
        result = { msg: 'Somethings wrong' }
      }
      // token
    }
    resJson(res, ret, result)
  })
}

exports.signUp = signUp
exports.login = login
