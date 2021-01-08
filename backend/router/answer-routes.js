const { Router } = require('express')
const express = require('express')
const { check } = require('express-validator')

const {
  saveAnswer,
  getAnswerById,
  getAnswerByQA,
} = require('../controller/answer')
const checkAuth = require('../middleware/check-auth')

const router = express.Router()

router.put(
  '/',
  [
    check('author').not().isEmpty(),
    check('answer').not().isEmpty(),
    check('questionID').not().isEmpty(),
  ],
  saveAnswer
)

router.get('/id/:id', getAnswerById)

router.get('/qa/:id', getAnswerByQA)

module.exports = router
