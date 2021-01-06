const resJson = require('../response/response')
const db = require('../sql/connection')
const sql = require('../sql/sql')

db.connect(() => {
  console.log('ok')
})

const saveQuestion = (req, res, next) => {
  const { questionNO, topic, description, mainAns, tagID, user } = req.body
  db.query(
    sql.questoin.insert,
    [questionNO, topic, description, mainAns, tagID, user],
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
  const id = req.params.questionID
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
  const questionNO = req.params.questionNO
  db.query(sql.questoin.selectByQuestionNO, [questionNO], (err, res2) => {
    let ret
    if (err) {
      ;(ret = 'fail'), resJson(res, ret, { msg: 'Something wrond' })
    } else {
      ret = 'find'
      resJson(res, ret, res2)
    }
  })
}

exports.getQuestionByNo = getQuestionByNo
exports.saveQuestion = saveQuestion
exports.getQuestionById = getQuestionById
