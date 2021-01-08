const resJson = require('../response/response')
const db = require('../sql/connection')
const sql = require('../sql/sql')

db.connect(() => {
  console.log('ok')
})

const saveQuestion = (req, res, next) => {
  const { questionNO, topic, description, tagID, user } = req.body
  db.query(
    sql.questoin.insert,
    [questionNO, topic, description, tagID, user],
    (err, res2) => {
      let ret
      if (err) {
        ret = 'fail'
        resJson(res, ret, { msg: 'Something wrong' })
      } else {
        ret = 'save'
        resJson(res, ret, { msg: 'Qeestion saved' })
      }
    }
  )
}

const getQuestionById = (req, res, next) => {
  const id = req.params.id
  db.query(sql.questoin.selectById, [id], (err, res2) => {
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

const getQuestionByNo = (req, res, next) => {
  const questionNO = req.params.NO
  db.query(sql.questoin.selectByQuestionNO, [questionNO], (err, res2) => {
    let ret
    if (err) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Something wrond' })
    } else {
      ret = 'find'
      resJson(res, ret, res2)
    }
  })
}

const updateMainAns = (req, res, next) => {
  const { questionID, mainAns } = req.body
  db.query(sql.questoin.update, [mainAns, questionID], (err, res2) => {
    let ret
    if (err) {
      ret = 'fail'
      resJson(res, ret, { msg: 'Something wrong' })
    } else {
      ret = 'update'
      resJson(res, ret, { msg: 'main answer updated' })
    }
  })
}

exports.getQuestionByNo = getQuestionByNo
exports.saveQuestion = saveQuestion
exports.getQuestionById = getQuestionById
exports.updateMainAns = updateMainAns
