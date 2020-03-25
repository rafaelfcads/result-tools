'use strict'

const Error = require('../../src/type/error')

describe('Type.Error', function() {

  it('isOk() should return true', function() {
    expect(Error({ key: 'value'}).isOk()).to.be.false
  })

  it('isError() should return false', function() {
    expect(Error({ key: 'value'}).isError()).to.be.true
  })

  it('orElse() should return Ok value', function() {
    const value = { key: 'value'}
    expect(Error(value).orElse('error')).to.be.eq('error')
    expect(Error(value).orElse('error')).to.be.not.deep.eq(value)
  })

  it('get() should return Ok value', function() {
    const value = { key: 'value'}
    expect(Error(value).get()).to.be.deep.eq(value)
  })

  it('serial() should return Error value', async function() {
    const fnPromise = (argOne, argTwo) => [argOne, argTwo]
    const value = { key: 'value'}
    const result = Error(value).serial(fnPromise, [4, 2])

    expect(result.isOk).to.be.ok
    expect(result.isError).to.be.ok
    expect(result.orElse).to.be.ok
    expect(result.get).to.be.ok
    expect(result.serial).to.be.ok
    expect(result.chain).to.be.ok
    expect(result.serialSync).to.be.ok
    expect(result.chainSync).to.be.ok
  })

  it('serialSync() should return Error value', async function() {
    const fnPromise = (argOne, argTwo) => [argOne, argTwo]
    const value = { key: 'value'}
    const result = Error(value).serialSync(fnPromise, [4, 2])

    expect(result.isOk).to.be.ok
    expect(result.isError).to.be.ok
    expect(result.orElse).to.be.ok
    expect(result.get).to.be.ok
    expect(result.serial).to.be.ok
    expect(result.chain).to.be.ok
    expect(result.serialSync).to.be.ok
    expect(result.chainSync).to.be.ok
  })

  it('chain() should return Error value', async function() {
    const fnPromise = (argOne, argTwo) => [argOne, argTwo]
    const value = { key: 'value'}
    const result = Error(value).chain(fnPromise)

    expect(result.isOk).to.be.ok
    expect(result.isError).to.be.ok
    expect(result.orElse).to.be.ok
    expect(result.get).to.be.ok
    expect(result.serial).to.be.ok
    expect(result.chain).to.be.ok
    expect(result.serialSync).to.be.ok
    expect(result.chainSync).to.be.ok
  })

  it('chainSync() should return Error value', async function() {
    const fnPromise = (argOne, argTwo) => [argOne, argTwo]
    const value = { key: 'value'}
    const result = Error(value).chainSync(fnPromise)

    expect(result.isOk).to.be.ok
    expect(result.isError).to.be.ok
    expect(result.orElse).to.be.ok
    expect(result.get).to.be.ok
    expect(result.serial).to.be.ok
    expect(result.chain).to.be.ok
    expect(result.serialSync).to.be.ok
    expect(result.chainSync).to.be.ok
  })
})
