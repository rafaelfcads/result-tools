'use strict'

import Type, { Error } from '../type'
import validate from './validate'

const _execute = async(fn, validator, result) => {

  try {
    return validate(validator, await fn(result))
  } catch (err) {
    return Error(err)
  }
}

export default (fns) => async() => {

  let result
  for (let [ fn, validator ] of fns) {
    result = _execute(fn, validator, result)
    if (Type.isError(result)) break
  }
  return result
}
