'use strict'

import _try from '../../src/async/try'
const { Ok, Error } = require('../../src/type')

describe('async.try', function() {

  it('should return Error when promise rejects', async function() {
    const fnPromise = () => Promise.reject(-1)
    const result = await _try(fnPromise)

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.orElse('error')).to.be.eq('error')
    expect(result.get()).to.be.eq(-1)
    expect(result.isError()).to.be.true
  })

  it('should return Error when result Error', async function() {
    const fnPromise = () => Promise.resolve(Error(-1))
    const result = await _try(fnPromise)

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.orElse('error')).to.be.eq('error')
    expect(result.get()).to.be.eq(-1)
    expect(result.isError()).to.be.true
  })

  it('should return Ok', async function() {
    const fnPromise = () => Promise.resolve(2)
    const result = await _try(fnPromise)

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.be.eq(2)
    expect(result.isOk()).to.be.true
  })

  it('should return Ok when result ok', async function() {
    const fnPromise = () => Promise.resolve(Ok(3))
    const result = await _try(fnPromise)

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.be.eq(3)
    expect(result.isOk()).to.be.true
  })
  
})
