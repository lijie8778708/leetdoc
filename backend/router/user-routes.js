const { Router } = require('express')
const express = require('express')
const { check } = require('express-validator')

const { signUp, login } = require('../controller/user')
const checkAuth = require('../middleware/check-auth')

const router = express.Router()

router.put(
  '/signup',
  [check('username').not().isEmpty(), check('password').not().isEmpty()],
  signUp
)

router.post(
  '/login',
  [check('username').not().isEmpty(), check('password').not().isEmpty()],
  login
)

module.exports = router
