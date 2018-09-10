'use strict'

import { Error } from 'folktale/result'

export default (fns) => async() => {

  let results = []
  for (let [ fn, validator, opts ] of fns) {
    let result = await fn(...opts)
    results.push(result)
    if (Error.hasInstance(validator(result))) break
  }
  return results
}
