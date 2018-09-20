'use strict'

import _try from './try'

export default (fn) => (results) => _try(() => fn(...results))
