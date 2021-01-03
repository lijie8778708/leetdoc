const resJson = require('../response/response')
const db = require('../sql/connection')
const sql = require('../sql/sql')

db.connect(() => {
  console.log('ok')
})

const saveTag = (req, res, next) => {
  let { tagName, userID } = req.body
  tagName = tagName.toLowerCase()
  db.query(sql.tag.selectByTagName, [tagName], (err, result) => {
    let ret
    if (err) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Something wrong' })
    } else if (result[0]) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Tag existed' })
    } else {
      db.query(sql.tag.insert, [tagName, userID], (err, res2) => {
        if (err) {
          ret = 'fail'
          resJson(res, ret, { msg: 'Failed to save tag, try again' })
        } else {
          ret = 'save'
          resJson(res, ret, { msg: 'Tag saved' })
        }
      })
    }
  })
}

const getTag = (req, res, next) => {
  const tagID = req.params.tagID
  db.query(sql.tag.selectById, [tagID], (err, res2) => {
    console.log(res2[0])
    let ret
    if (err) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Something wrong' })
    } else if (!res) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Tag not found' })
    } else {
      ret = 'find'
      resJson(res, ret, res2)
    }
  })
}
const getAll = (req, res, next) => {
  db.query(sql.tag.selectAll, (err, res2) => {
    let ret
    if (err) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Something wrong' })
    } else {
      ret = 'find'
      resJson(res, ret, res2)
    }
  })
}

exports.saveTag = saveTag
exports.getTag = getTag
exports.getAll = getAll
