'use strict'

import Ok from '../../src/type/ok'

describe('Type.Ok', function() {

  it('isOk() should return true', function() {
    expect(Ok({ key: 'value'}).isOk()).to.be.true
  })

  it('isError() should return false', function() {
    expect(Ok({ key: 'value'}).isError()).to.be.false
  })

  it('orElse() should return Ok value', function() {
    const value = { key: 'value'}
    expect(Ok(value).orElse('error')).to.be.deep.eq(value)
    expect(Ok(value).orElse('error')).to.be.not.eq('error')
  })

  it('get() should return Ok value', function() {
    const value = { key: 'value'}
    expect(Ok(value).get()).to.be.deep.eq(value)
  })

  it('serial() should return Ok value', async function() {
    const fnPromise = (argOne, argTwo) => [argOne, argTwo]
    const value = { key: 'value'}
    const result = await Ok(value).serial(fnPromise, [4, 2])

    expect(result.serial).to.be.ok
    expect(result.chain).to.be.ok
    expect(result.map).to.be.ok
    expect(result.run).to.be.ok
  })

  it('serialSync() should return Ok value', async function() {
    const fnPromise = (argOne, argTwo) => [argOne, argTwo]
    const value = { key: 'value'}
    const result = Ok(value).serialSync(fnPromise, [4, 2])

    expect(result.serialSync).to.be.ok
    expect(result.chainSync).to.be.ok
    expect(result.mapSync).to.be.ok
    expect(result.run).to.be.ok
  })

  it('chain() should return Ok value', async function() {
    const fnPromise = (argOne, argTwo) => [argOne, argTwo]
    const value = { key: 'value'}
    const result = await Ok(value).chain(fnPromise)

    expect(result.serial).to.be.ok
    expect(result.chain).to.be.ok
    expect(result.map).to.be.ok
    expect(result.run).to.be.ok
  })

  it('chainSync() should return Ok value', async function() {
    const fnPromise = (argOne, argTwo) => [argOne, argTwo]
    const value = { key: 'value'}
    const result = Ok(value).chainSync(fnPromise)
    
    expect(result.serialSync).to.be.ok
    expect(result.chainSync).to.be.ok
    expect(result.mapSync).to.be.ok
    expect(result.run).to.be.ok
  })
  
})
