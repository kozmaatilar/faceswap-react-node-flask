const dotenv = require('dotenv')
const Joi = require('joi')
const path = require("path")

dotenv.config()

const envVariableSchema = Joi.object() 
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(8000),
    LOG_LEVEL: Joi.string(),
    LOG_FILE_PATH: Joi.string(),
  })
  .unknown() // Method allows additional keys in the object that are not explicity defined in the schems

const { value: envVars, error } = envVariableSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env)

if (error) throw new Error(`Config Validation Error: ${error.message}`)

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  log: {
      level: envVars.LOG_LEVEL,
      path: path.join(__dirname, envVars.LOG_FILE_PATH),
  },
}