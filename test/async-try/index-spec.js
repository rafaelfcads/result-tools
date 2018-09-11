'use strict'

import { Ok, Error } from '../../src/type'
import asyncTry from '../../src/async-try'

describe('asyncTry', function() {

  it('should return Error when it is not a function', async function() {

    const promise = Promise.resolve(1)
    const result = await asyncTry(promise)
    expect(result.isError()).to.be.true
    expect(result.get()).to.be.instanceof(TypeError)
  })

  it('should return Error when promise rejects', async function() {

    const fnPromise = () => Promise.reject(-1)
    const result = await asyncTry(fnPromise)
    expect(result.isError()).to.be.true
    expect(result.orElse('error')).to.be.eq('error')
    expect(result.get()).to.be.eq(-1)
  })

  it('should return Ok', async function() {

    const fnPromise = () => Promise.resolve(1)
    const result = await asyncTry(fnPromise)
    expect(result.isOk()).to.be.true
    expect(result.orElse()).to.be.eq(1)
  })
})
