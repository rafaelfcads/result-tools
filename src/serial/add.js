'use strict'

import noop from './validate'

export default (methods) => (fns) => (fn, opts) => (validator = noop) => {
  fns.push([ fn, validator, opts ])
  return methods
}
