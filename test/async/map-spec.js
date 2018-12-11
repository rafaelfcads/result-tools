'use strict'

import map from '../../src/async/map'

describe('async.map', function() {

  it('should return Error when promise rejects', async function() {
    const fnPromise = () => Promise.reject(-1)
    const result = await map(fnPromise)(2)

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.orElse('error')).to.be.eq('error')
    expect(result.get()).to.be.eq(-1)
    expect(result.isError()).to.be.true
  })

  it('should return Ok', async function() {
    const fnPromise = (args) => Promise.resolve(args)
    const result = await map(fnPromise)([3])

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.be.eq(3)
    expect(result.isOk()).to.be.true
  })
  
})
