'use strict'

import add from './add'
import run from './run'

export default (fns = []) => {

  const methods = {
    add: (fn, validator) => add(methods)(fns)(fn, validator),
    run: run(fns)
  }
  return methods
}
