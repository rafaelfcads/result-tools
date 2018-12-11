'use strict'

import serial from '../../src/sync/serial'
import { Error } from '../../src/type'

describe('sync.serial', function() {

  it('should return Error when promise rejects', async function() {
    const fnPromise = () => Error(-1)
    const result = serial(fnPromise, [2])()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.orElse('error')).to.be.eq('error')
    expect(result.get()).to.be.eq(-1)
    expect(result.isError()).to.be.true
  })

  it('should return Ok', async function() {
    const fnPromise = (argOne, argTwo) => [argOne, argTwo]
    const result = serial(fnPromise, [4, 2])()
    
    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.members([4, 2])
    expect(result.isOk()).to.be.true
  })
  
})
