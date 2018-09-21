'use strict'

export default (methods) => (fns) => (type, fn, opts) => {
  fns.push([ type, fn, opts ])
  return methods
}
