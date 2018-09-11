'use strict'

import Type from '../type'

export default (fns) => async() => {

  let results = []
  for (let [ fn, validator, opts ] of fns) {
    let result = await fn(...opts)
    results.push(result)
    if (Type.isError(validator(result))) break
  }
  return results
}
