'use strict'

import add from './add'
import map from './map'
import run from './run'

export default (fns = []) => {

  const methods = {
    add: (fn, ...opts) => add(methods)(fns)(fn, opts),
    map: (fn, ...opts) => map(methods)(fns)(fn, opts),
    run: run(fns)
  }
  return methods
}
