'use strict'

import add from './add'
import asyncChain from './asyncChain'
import asyncSerial from './asyncSerial'
import asyncMap from './asyncMap'
import asyncRun from './asyncRun'
import chain from './chain'
import serial from './serial'
import map from './map'
import run from './run'

const async = (fns = []) => {

  const methods = {
    asyncSerial: (fn, ...opts) => add(methods)(fns)(asyncSerial, fn, opts),
    asyncChain: (fn) => add(methods)(fns)(asyncChain, fn),
    asyncMap: (fn) => add(methods)(fns)(asyncMap, fn),
    asyncRun: asyncRun(fns)
  }
  return methods
}

const sync = (fns = []) => {

  const methods = {
    serial: (fn, ...opts) => add(methods)(fns)(serial, fn, opts),
    chain: (fn) => add(methods)(fns)(chain, fn),
    map: (fn) => add(methods)(fns)(map, fn),
    run: run(fns)
  }
  return methods
}

export default { async, sync }

