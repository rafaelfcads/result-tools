'use strict'

import Type from './type'
import Ok from './type/ok'
import Error from './type/error'
import _try from './async/try'
import trySync from './sync/try'
import flow from './async'
import flowSync from './sync'

const serial = (fn, ...opts) => flow().serial(fn, ...opts)
const chain = (fn) => flow().chain(fn)
const serialSync = (fn, ...opts) => flowSync().serialSync(fn, ...opts)
const chainSync = (fn) => flowSync().chainSync(fn)

export default { Type, Ok, Error, _try, trySync, serial, chain, serialSync, chainSync }
export { Type, Ok, Error, _try, trySync, serial as Serial, chain as Chain, serialSync as SerialSync, chainSync as ChainSync }
