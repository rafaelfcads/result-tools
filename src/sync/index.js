'use strict'

const add = require('./add')
const chain = require('./chain')
const serial = require('./serial')
const map = require('./map')
const run = require('./run')

module.exports = (fns = []) => {

  const methods = {
    serialSync: (fn, ...opts) => add(methods)(fns)(serial, fn, opts),
    chainSync: (fn) => add(methods)(fns)(chain, fn),
    mapSync: (fn) => add(methods)(fns)(map, fn),
    run: run(fns)
  }
  return methods
}


