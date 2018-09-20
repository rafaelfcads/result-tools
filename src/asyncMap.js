'use strict'

import asyncTry from './asyncTry'

export default (fn) => (results) => asyncTry(() => fn(...results))
