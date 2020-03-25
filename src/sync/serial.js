'use strict'

const _try = require('./try')

module.exports = (fn, opts) => () => _try(() => fn(...opts))
