'use strict'

const noop = (result) => result

export default (methods) => (fns) => (fn, validator = noop, opts) => {
  fns.push([ fn, validator, opts ])
  return methods
}
