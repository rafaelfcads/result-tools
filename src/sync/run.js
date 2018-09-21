'use strict'

import serial from './serial'
import Type, { Ok } from './type'

const response = (result) => (results) => Type.isError(result)
  ? result
  : Ok(results)

export default (fns) =>() => {

  let results = []
  let result

  for (let [ fluentMethod, fn, opts ] of fns) {
    result = fluentMethod(fn, opts)(results)
    if (Type.isError(result)) break
    if (fluentMethod !== serial) results = []
    results.push(result.get())
  }

  return response(result)(results)
}

