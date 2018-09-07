'use strict'

import Type, { Ok, Error } from '../type'

const isFunction = (fn) => typeof fn === 'function'
const isResultType = (result) => Type.isOk(result) || Type.isError(result)

const _validate = (validator, result) => {

  if (isFunction(validator)) {

    return isResultType(result)
      ? validator(result.get())
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
    if (Type.isError(result)) break
  }
  return result
}
