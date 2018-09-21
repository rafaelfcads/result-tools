'use strict'

import Type from './type'
import Ok from './type/ok'
import Error from './type/error'
import asyncTry from './asyncTry'
import _try from './try'
import asyncFlow from './asyncFlow'
import flow from './flow'

const asyncSerial = (fn, ...opts) => asyncFlow().asyncSerial(fn, ...opts)
const asyncChain = (fn) => asyncFlow().asyncChain(fn)
const serial = (fn, ...opts) => flow().serial(fn, ...opts)
const chain = (fn) => flow().chain(fn)

export default { Type, Ok, Error, _try, asyncTry, serial, chain, asyncSerial, asyncChain }
export { Type, Ok, Error, _try, asyncTry, serial as Serial, chain as Chain, asyncSerial as AsyncSerial, asyncChain as AsyncChain }
