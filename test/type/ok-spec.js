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
})
