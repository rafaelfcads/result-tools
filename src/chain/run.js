'use strict'

import asyncTry from '../async-try'
import Type from '../type'

export default (fns) => async() => {

  let result
  for (let fn of fns) {
    if (!!result && Type.isError(result)) break
    result = await asyncTry(() => fn(result))
  }
  return result
}
