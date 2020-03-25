'use strict'

const serial = require('./serial')
const Type = require('../type')

module.exports = (fns) =>() => {

  let results = []
  let result

  for (let [ fluentMethod, fn, opts ] of fns) {
    result = fluentMethod(fn, opts)(results)
    if (Type.isError(result)) return result
    if (fluentMethod !== serial) results = []
    results.push(result.get())
  }

  return results.length === 1
    ? Type.Ok(results[0])
    : Type.Ok(results)
}

