'use strict'

import { Error } from 'folktale/result'

export default (fns) => async() => {

  let result
  for (let [ fn, validator, opts ] of fns) {

    console.log('RUN fn')
    console.log(fn)
    console.log('RUN  validator')
    console.log(validator)
    console.log('RUN  opts')
    console.log(opts)

    result = validator(await fn(...opts))

    console.log('RUN  result')
    console.log(result)
    if (Error.hasInstance(result)) break
  }
  return result
}
