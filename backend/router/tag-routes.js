const { Router } = require('express')
const express = require('express')
const { check } = require('express-validator')

const { saveTag, getTag, getAll } = require('../controller/tag')
const checkAuth = require('../middleware/check-auth')

const router = express.Router()

router.put(
  '/save',
  [check('tagName').not().isEmpty(), check('userID').not().isEmpty()],
  saveTag
)

router.get('/id/:tagID', getTag)

router.get('/', getAll)

module.exports = router
