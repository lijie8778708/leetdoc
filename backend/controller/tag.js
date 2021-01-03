const resJson = require('../response/response')
const db = require('../sql/connection')
const sql = require('../sql/sql')

db.connect(() => {
  console.log('ok')
})

const saveTag = (req, res, next) => {
  let [tagName, userID] = req.body
  tagName = tagName.toLowerCase()
  db.query(sql.tag.selectByTagName, [tagName], (err, result) => {
    let ret
    if (err) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Something wrong' })
    }
    if (result[0]) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Tag existed' })
    }

    db.query(sql.tag.insert, [tagName, userID], (err, res) => {
      if (err) {
        ret = 'fail'
        resJson(res, ret, { msg: 'Failed to save tag, try again' })
      }
      ret = 'save'
      resJson(res, ret, { msg: 'Tag saved' })
    })
  })
}

const getTag = (req, res, next) => {
  const tagID = req.params.tagID
  db.query(sql.tag.selectById, [tagID], (err, res) => {
    let ret
    if (err) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Something wrond' })
    }
    if (!res[0]) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Tag not found' })
    }
    ret = 'save'
    resJson(res, ret, { data: res })
  })
}
const getAll = (req, res, next) => {
  db.query(sql.tag.selectAll, (err, res) => {
    let ret
    if (err) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Something wrong' })
    }
    ret = 'find'
    resJson(res, ret, { data: res })
  })
}

exports.saveTag = saveTag
exports.getTag = getTag
exports.getAll = getAll
