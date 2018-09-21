'use strict'

import Type, { Ok, Error } from './type'

export default function _try(fn) {

  try {

    const result = fn()
    return Type.isOk(result) || Type.isError(result)
      ? result
      : Ok(result)

  } catch (err) {
    return Error(err)
  }
}
