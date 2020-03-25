'use strict'

const Ok = require('./ok')
const Error = require('./error')

const isOk = (val) => !!val
  && val.hasOwnProperty('isOk')
  && val.isOk()

const isError = (val) => !!val
  && val.hasOwnProperty('isError')
  && val.isError()

module.exports.Ok = Ok
module.exports.Error = Error
module.exports.isError = isError
module.exports.isOk = isOk


