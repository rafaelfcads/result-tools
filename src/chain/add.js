'use strict'

export default (methods) => (fns) => (fn, validator) => {
  fns.push([ fn, validator ])
  return methods
}
