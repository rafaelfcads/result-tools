'use strict'

import Error from '../../src/type/error'

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
})
