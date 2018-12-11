'use strict'

import serial from '../../src/async/serial'

describe('async.serial', function() {

  it('should return Error when promise rejects', async function() {
    const fnPromise = () => Promise.reject(-1)
    const result = await serial(fnPromise, [2])()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.orElse('error')).to.be.eq('error')
    expect(result.get()).to.be.eq(-1)
    expect(result.isError()).to.be.true
  })

  it('should return Ok', async function() {
    const fnPromise = (argOne, argTwo) => Promise.resolve([argOne, argTwo])
    const result = await serial(fnPromise, [4, 2])()
    
    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.members([4, 2])
    expect(result.isOk()).to.be.true
  })
  
})
