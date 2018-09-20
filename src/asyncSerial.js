'use strict'

import asyncTry from './asyncTry'

export default (fn, opts) => async() => await asyncTry(() => fn(...opts))
