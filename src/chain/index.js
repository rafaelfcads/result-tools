'use strict'

import add from './add'
import run from './run'

export default (fns = []) => {

  const methods = {
    add: (fn) => add(methods)(fns)(fn),
    map: (fn) => add(methods)(fns)(fn),
    run: run(fns)
  }
  return methods
}
