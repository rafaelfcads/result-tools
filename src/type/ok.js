'use strict'

import syncFlow from '../sync'
import flow from '../async'

const serial = (fn, ...opts) => flow().serial(fn, ...opts)
const chain = (fn) => flow().chain(fn)
const syncSerial = (fn, ...opts) => syncFlow().serial(fn, ...opts)
const syncChain = (fn) => syncFlow().chain(fn)

export default function Ok(value) {

  return {

    isOk: () => true,
    isError: () => false,
    orElse: () => value,
    get: () => value,
    serial: (fn, ...opts) => serial(() => value).serial(fn, ...opts),
    chain: (fn) => chain(() => value).serial(fn),
    syncSerial: (fn, ...opts) => syncSerial(() => value).serial(fn, ...opts),
    syncChain: (fn) => syncChain(() => value).serial(fn)
    
  }
}
