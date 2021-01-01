const jwt = require('jsonwebtoken')
const env = require('../config/env')
const HttpError = require('../util/http-error')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.split(' ')[1]
    if (!token) {
      throw new HttpError('Authentication Failed')
    }

    const decodedToken = jwt.verify(token, env.JWT_KEY)
    req.userData = { userId: decodedToken.userId }
    next()
  } catch (err) {
    return next(err)
  }
}
