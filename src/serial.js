'use strict'

import asyncTry from './try'

export default (fn, opts) => async() => await asyncTry(() => fn(...opts))
