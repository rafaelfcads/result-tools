'use strict'

export default (methods) => (fns) => (fn, opts) => {
  fns.push([ 'map', fn, opts ])
  return methods
}
