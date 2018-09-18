'use strict'

import asyncTry from '../async-try'
import Type, { Ok } from '../type'

const isFn = (type) => type === 'fn'
const isMap = (type) => type === 'map'

export default (fns) => async() => {
  let result
  let results = []

  for (let [ type, fn, opts ] of fns) {

    if (!!result && Type.isError(result)) break
    if (isFn(type)) result = await asyncTry(() => fn(...opts))
    if (isMap(type)) {
      result = await asyncTry(() => fn(...results))
      results = []
    }

    results.push(result.get())
  }

  return Type.isError(result)
      ? result
      : Ok(results)
}

