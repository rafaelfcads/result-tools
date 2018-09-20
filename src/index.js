'use strict'

import Type from './type'
import Ok from './type/ok'
import Error from './type/error'
import asyncTry from './try'
import { async, sync } from './flow'

const asyncSerial = (fn, ...opts) => async().asyncSerial(fn, ...opts)
const asyncChain = (fn) => async().asyncChain(fn)
const serial = (fn, ...opts) => sync().serial(fn, ...opts)
const chain = (fn) => sync().chain(fn)

export default { Type, Ok, Error, asyncTry, serial, chain, asyncSerial, asyncChain }
export { Type, Ok, Error, asyncTry, serial as Serial, chain as Chain, asyncSerial as AsyncSerial, asyncChain as AsyncChain }
