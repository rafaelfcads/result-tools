'use strict'

import Type, { Ok, Error } from './type'

export default async function asyncTry(fn) {

  try {

    const result = await fn()
    return Type.isOk(result) || Type.isError(result)
      ? result
      : Ok(result)

  } catch (err) {
    return Error(err)
  }
}
