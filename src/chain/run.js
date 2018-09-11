'use strict'

import asyncTry from '../async-try'
import Type from '../type'
import validate from './validate'

export default (fns) => async() => {

  let result
  for (let [ fn, validator ] of fns) {
    result = await asyncTry(() => fn(result))
    result = validate(validator, result)
    if (Type.isError(result)) break
  }
  return result
}
