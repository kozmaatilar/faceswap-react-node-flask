const express = require("express")
const config = require("./config/config")
const logger = require("./config/logger.config")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require('./config/morgan.config')

const app = express()

if (config.env != 'test') {
  app.use(morgan.successHandler)
  app.use(morgan.errorHandler)
}

app.use(cors({ origin: '*' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Middleware to set Cross-Origin-Resource-Policy header for all responses
app.all('*', (req, res, next) => {
  res.header(
    'Cross-Origin-Resource-Policy',
    "same-site | same-origin | cross-origin",
  )
  next()
})

const routes = require("./routes")
app.use('/', routes)

app.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`)
})
