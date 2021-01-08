const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const router = express.Router()
const sqlConfig = require('./config/mysql')
const userRouter = require('./router/user-routes')
const tagRouter = require('./router/tag-routes')
const questionRouter = require('./router/question-routes')
const answerRouter = require('./router/answer-routes')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  next()
})

app.use('/user', userRouter)
app.use('/tag', tagRouter)
app.use('/question', questionRouter)
app.use('/answer', answerRouter)

app.listen(3040, () => {
  console.log('ok')
})
