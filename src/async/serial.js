'use strict'

import _try from './try'

module.exports = (fn, opts) => async() => await _try(() => fn(...opts))
