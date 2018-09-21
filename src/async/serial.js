'use strict'

import _try from './try'

export default (fn, opts) => async() => await _try(() => fn(...opts))
