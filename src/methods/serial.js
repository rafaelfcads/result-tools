'use strict'

import asyncTry from '../async-try'

export default (fn, opts) => async() => await asyncTry(() => fn(...opts))
