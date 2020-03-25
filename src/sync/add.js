'use strict'

module.exports = (methods) => (fns) => (type, fn, opts) => {
  fns.push([ type, fn, opts ])
  return methods
}
