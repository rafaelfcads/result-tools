'use strict'

import { pipe, set } from 'lodash/fp'
import Result from 'folktale/result'
import asyncTry from './async-try'
import chain from './chain'

module.exports = pipe(
  set('asyncTry', asyncTry),
  set('chain', chain)
)(Result)
