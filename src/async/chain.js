'use strict'

import _try from './try'

export default (fn) => async(results) => await _try(() => fn(...results))
