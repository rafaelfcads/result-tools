'use strict'

import add from './add'
import run from './run'

export default (fns = []) => {

  const methods = {
    add: (fn, ...opts) => (validator) => add(methods)(fns)(fn, opts)(validator),
    run: run(fns)
  }
  return methods
}
