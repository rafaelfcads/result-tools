'use strict'

import Type, { Ok } from '../type'

const isFunction = (fn) => typeof fn === 'function'

export default (validator, result) => {
  if (isFunction(validator)) return validator(result)
  return Type.isOk(result) || Type.isError(result)
    ? result
    : Ok(result)
}
