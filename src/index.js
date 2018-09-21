'use strict'

import Type from './type'
import Ok from './type/ok'
import Error from './type/error'
import _try from './async/try'
import syncTry from './sync/try'
import flow from './async'
import syncFlow from './sync'

const serial = (fn, ...opts) => flow().serial(fn, ...opts)
const chain = (fn) => flow().chain(fn)
const syncSerial = (fn, ...opts) => syncFlow().serial(fn, ...opts)
const syncChain = (fn) => syncFlow().chain(fn)

export default { Type, Ok, Error, _try, syncTry, serial, chain, syncSerial, syncChain }
export { Type, Ok, Error, _try, syncTry, serial as Serial, chain as Chain, syncSerial as SyncSerial, syncChain as SyncChain }
