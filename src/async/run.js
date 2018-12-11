'use strict'

import serial from './serial'
import Type, { Ok } from '../type'

export default (fns) => async() => {
  let results = []
  let result

  for (let [ fluentMethod, fn, opts ] of fns) {

    result = await fluentMethod(fn, opts)(results)
    if (Type.isError(result)) return result
    if (fluentMethod !== serial) results = []
    results.push(result.get())
  }

  return results.length === 1
    ? Ok(results[0])
    : Ok(results)
}
