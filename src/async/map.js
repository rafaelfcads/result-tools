'use strict'

import _try from './try'

module.exports = (fn) => async(results) => await _try(() => fn(...results))
