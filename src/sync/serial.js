'use strict'

import _try from './try'

export default (fn, opts) => () => _try(() => fn(...opts))
