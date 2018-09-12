'use strict'

import Ok from './ok'
import Error from './error'

const isOk = (val) => !!val
  && val.hasOwnProperty('isOk')
  && val.isOk()

const isError = (val) => !!val
  && val.hasOwnProperty('isError')
  && val.isError()

export default { Ok, Error, isOk, isError }
export { Ok, Error, isOk, isError }
