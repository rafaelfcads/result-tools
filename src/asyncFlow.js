'use strict'

import add from './add'
import asyncChain from './asyncChain'
import asyncSerial from './asyncSerial'
import asyncMap from './asyncMap'
import asyncRun from './asyncRun'

export default (fns = []) => {

  const methods = {
    asyncSerial: (fn, ...opts) => add(methods)(fns)(asyncSerial, fn, opts),
    asyncChain: (fn) => add(methods)(fns)(asyncChain, fn),
    asyncMap: (fn) => add(methods)(fns)(asyncMap, fn),
    run: asyncRun(fns)
  }
  return methods
}


