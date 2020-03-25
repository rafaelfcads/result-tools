'use strict'

const Type = require('../type')

module.exports = function _try(fn) {

  try {

    const result = fn()
    return Type.isOk(result) || Type.isError(result)
      ? result
      : Type.Ok(result)

  } catch (err) {
    return Type.Error(err)
  }
}
