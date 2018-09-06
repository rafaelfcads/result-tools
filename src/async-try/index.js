'use strict'

import { Ok, Error } from 'folktale/result'

export default async function asyncTry(fn) {

  try {
    return Ok(await fn())
  } catch (err) {
    return Error(err)
  }
}
