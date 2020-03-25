'use strict'

const Type = require('../type')

export default async function _try(fn) {

  try {

    const result = await fn()
    return Type.isOk(result) || Type.isError(result)
      ? result
      : Type.Ok(result)

  } catch (err) {
    return Type.Error(err)
  }
}

