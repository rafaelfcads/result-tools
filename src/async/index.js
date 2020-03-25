'use strict'

const add = require('../sync/add')
// const chain = require('./chain')
const serial = require('./serial')
const map = require('./map')
// const run = require('./run')

// import add from '../sync/add'
import chain from './chain'
// import serial from './serial'
// import map from './map'
import run from './run'

export default (fns = []) => {

  const methods = {
    serial: (fn, ...opts) => add(methods)(fns)(serial, fn, opts),
    chain: (fn) => add(methods)(fns)(chain, fn),
    map: (fn) => add(methods)(fns)(map, fn),
    run: run(fns)
  }
  return methods
}
