'use strict'

import flow from '../flow'

const serial = (fn, ...opts) => flow().serial(fn, ...opts)
const chain = (fn) => flow().chain(fn)

export default function Ok(value) {

  return {

    isOk: () => true,
    isError: () => false,
    orElse: () => value,
    get: () => value,
    serial: (fn, ...opts) => serial(() => value).serial(fn, ...opts),
    chain: (fn) => chain(() => value).serial(fn),
    
  }
}
