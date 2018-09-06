'use strict'

import { Error } from 'folktale/result'

export default (fns) => async() => {

  let result
  for (let [ fn, validator ] of fns) {
    result = validator(await fn(result))
    if (Error.hasInstance(result)) break
  }
  return result
}
