'use strict'

import add from './add'
import run from './run'

export default (fns = []) => {

  const methods = {
    add: (fn, validator, ...opts) => add(methods)(fns)(fn, validator, opts),
    run: run(fns)
  }
  return methods
}
