'use strict'

import Type from './type'
import Ok from './type/ok'
import Error from './type/error'
import asyncTry from './try'
import flow from './flow'

const serial = (fn, ...opts) => flow().serial(fn, ...opts)
const chain = (fn) => flow().chain(fn)

export default { Type, Ok, Error, asyncTry, serial, chain }
export { Type, Ok, Error, asyncTry, serial as Serial, chain as Chain }
