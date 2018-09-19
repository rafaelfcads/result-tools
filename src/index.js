'use strict'

import Type from './type'
import Ok from './type/ok'
import Error from './type/error'
import asyncTry from './try'
import flow from './flow'

const { serial, chain } = flow

export default { Type, Ok, Error, asyncTry, serial, chain }
export { Type, Ok, Error, asyncTry, serial as Serial, chain }
