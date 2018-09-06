'use strict'

const noop = (result) => result

export default (methods) => (fns) => (fn, validator = noop) => {
  fns.push([ fn, validator ])
  return methods
}
