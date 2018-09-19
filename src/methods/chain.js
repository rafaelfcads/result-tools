'use strict'

import asyncTry from '../async-try'

export default (fn) => (results) => asyncTry(() => fn(...results))
