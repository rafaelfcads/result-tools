'use strict'

import asyncSerial from './asyncSerial'
import Type, { Ok } from './type'

const response = (result) => (results) => Type.isError(result)
  ? result
  : Ok(results)

export default (fns) => async() => {

  let results = []
  let result

  for (let [ fluentMethod, fn, opts ] of fns) {
    result = await fluentMethod(fn, opts)(results)
    if (Type.isError(result)) break
    if (fluentMethod !== asyncSerial) results = []
    results.push(result.get())
  }

  return response(result)(results)
}

