'use strict'

import { Ok, Error } from 'folktale/result'
import asyncTry from '../../src/async-try'

describe('asyncTry', function() {

  it('should return Error when it is not a function', async function() {

    const promise = Promise.resolve(1)
    const result = await asyncTry(promise)
    expect(Error.hasInstance(result)).to.be.true
    expect(result.merge()).to.be.instanceof(TypeError)
  })

  it('should return Error when promise rejects', async function() {

    const fnPromise = () => Promise.reject(-1)
    const result = await asyncTry(fnPromise)
    expect(Error.hasInstance(result)).to.be.true
    expect(result.getOrElse('error')).to.be.eq('error')
    expect(result.merge()).to.be.eq(-1)
  })

  it('should return Ok', async function() {

    const fnPromise = () => Promise.resolve(1)
    const result = await asyncTry(fnPromise)
    expect(Ok.hasInstance(result)).to.be.true
    expect(result.getOrElse()).to.be.eq(1)
  })
})
