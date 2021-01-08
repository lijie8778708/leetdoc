const { Router } = require('express')
const express = require('express')
const { check } = require('express-validator')

const {
  getQuestionByNo,
  saveQuestion,
  getQuestionById,
  updateMainAns,
} = require('../controller/question')
const checkAuth = require('../middleware/check-auth')

const router = express.Router()

router.put(
  '/',
  [
    check('questionNO').not().isEmpty(),
    check('topic').not().isEmpty(),
    check('description').not().isEmpty(),
    check('tagID').not().isEmpty(),
    check('user').not().isEmpty(),
  ],
  saveQuestion
)

router.post(
  '/',
  [check('questionID').not().isEmpty(), check('mainAns').not().isEmpty()],
  updateMainAns
)

router.get('/id/:id', getQuestionById)

router.get('/NO/:NO', getQuestionByNo)

module.exports = router
