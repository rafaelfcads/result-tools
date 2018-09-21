'use strict'

import flowSync from '../sync'
import flow from '../async'

const serial = (fn, ...opts) => flow().serial(fn, ...opts)
const chain = (fn) => flow().chain(fn)
const serialSync = (fn, ...opts) => flowSync().serialSync(fn, ...opts)
const chainSync = (fn) => flowSync().chainSync(fn)

export default function Ok(value) {

  return {

    isOk: () => true,
    isError: () => false,
    orElse: () => value,
    get: () => value,
    serial: (fn, ...opts) => serial(() => value).serial(fn, ...opts),
    chain: (fn) => chain(() => value).chain(fn),
    serialSync: (fn, ...opts) => serialSync(() => value).serial(fn, ...opts),
    chainSync: (fn) => chainSync(() => value).chain(fn)
    
  }
}
