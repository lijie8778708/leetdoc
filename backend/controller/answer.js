const resJson = require('../response/response')
const db = require('../sql/connection')
const sql = require('../sql/sql')

db.connect(() => {
  console.log('ok')
})

const saveAnswer = (req, res, next) => {
  const { author, answer, date, questionID } = req.body
  db.query(
    sql.answer.insert,
    [author, answer, date, questionID],
    (err, res2) => {
      let ret
      if (err) {
        ret = 'fail'
        resJson(res, ret, { msg: 'Something wrong' })
      } else {
        ret = 'save'
        resJson(res, ret, { msg: 'Answer saved' })
      }
    }
  )
}

const getAnswerById = (req, res, next) => {
  const answerID = req.params.answerID
  db.query(sql.answer.selectById, [answerID], (err, res2) => {
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

const getAnswerByQA = (req, res, next) => {
  const questionID = req.params.questionID
  db.query(sql.answer.selectByQuestion, [questionID], (err, res2) => {
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

exports.saveAnswer = saveAnswer
exports.getAnswerById = getAnswerById
exports.getAnswerByQA = getAnswerByQA
