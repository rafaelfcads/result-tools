'use strict'

import flowSync from '../sync'
import flow from '../async'

const serial = (fn, ...opts) => flow().serial(fn, ...opts)
const serialSync = (fn, ...opts) => flowSync().serialSync(fn, ...opts)

module.exports = function Ok(value) {

  return {

    isOk: () => true,
    isError: () => false,
    orElse: () => value,
    get: () => value,
    serial: (fn, ...opts) => serial((arg) => arg, value).serial(fn, ...opts),
    chain: (fn) => serial((arg) => arg, value).chain(fn),
    serialSync: (fn, ...opts) => serialSync((arg) => arg, value).serialSync(fn, ...opts),
    chainSync: (fn) => serialSync((arg) => arg, value).chainSync(fn)
    
  }
}
