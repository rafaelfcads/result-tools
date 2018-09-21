'use strict'

import asyncTry from './asyncTry'

export default (fn) => async(results) => await asyncTry(() => fn(...results))
