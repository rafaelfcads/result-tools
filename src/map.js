'use strict'

import asyncTry from './try'

export default (fn) => (results) => asyncTry(() => fn(...results))
