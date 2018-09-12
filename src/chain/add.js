'use strict'

export default (methods) => (fns) => (fn) => {
  fns.push(fn)
  return methods
}
