'use strict'

import { Ok, Error } from 'folktale/result'

const isFunction = (fn) => typeof fn === 'function'
const isResultType = (result) => Ok.hasInstance(result)
  || Error.hasInstance(result)

const _validate = (validator, result) => {

  if (isFunction(validator)) {

    return isResultType(result)
      ? validator(result.merge())
      : validator(result)
  }

  return isResultType(result) ? result : Ok(result)
}

const _execute = async(fn, validator, result) => {

  try {
    return _validate(validator, await fn(result))
  } catch (err) {
    return Error(err)
  }
}

export default (fns) => async() => {

  let result
  for (let [ fn, validator ] of fns) {
    result = _execute(fn, validator, result)
    if (Error.hasInstance(result)) break
  }
  return result
}
