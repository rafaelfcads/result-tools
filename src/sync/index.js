'use strict'

import add from './add'
import chain from './chain'
import serial from './serial'
import map from './map'
import run from './run'

export default (fns = []) => {

  const methods = {
    serialSync: (fn, ...opts) => add(methods)(fns)(serial, fn, opts),
    chainSync: (fn) => add(methods)(fns)(chain, fn),
    mapSync: (fn) => add(methods)(fns)(map, fn),
    run: run(fns)
  }
  return methods
}


