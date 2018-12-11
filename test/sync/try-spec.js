'use strict'

import _try from '../../src/sync/try'
import { Ok, Error } from '../../src/type'

describe('sync.try', function() {

  it('should return Error when promise rejects', async function() {
    const fnPromise = () => Error(-1)
    const result = _try(fnPromise)

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.orElse('error')).to.be.eq('error')
    expect(result.get()).to.be.eq(-1)
    expect(result.isError()).to.be.true
  })

  it('should return Ok', async function() {
    const fnPromise = () => 2
    const result = _try(fnPromise)

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.be.eq(2)
    expect(result.isOk()).to.be.true
  })

  it('should return Ok when result ok', async function() {
    const fnPromise = () => Ok(3)
    const result = _try(fnPromise)

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.be.eq(3)
    expect(result.isOk()).to.be.true
  })
  
})
