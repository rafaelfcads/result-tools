'use strict'

const _try = require('./try')

module.exports = (fn) => (results) => _try(() => fn(...results))
