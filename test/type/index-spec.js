'use strict'

import Type, { Ok, Error, isOk, isError } from '../../src/type'

describe('Type', function() {

  it('should be defined', function() {

    expect(Type).to.be.ok
    expect(Type.Ok).to.be.ok
    expect(Type.isOk).to.be.ok
    expect(Type.Error).to.be.ok
    expect(Type.isError).to.be.ok

    expect(Ok).to.be.ok
    expect(isOk).to.be.ok
    expect(Error).to.be.ok
    expect(isError).to.be.ok
  })

  context('isOk', function() {

    it('should return true', function() {
      const ok = Ok('test')
      expect(isOk(ok)).to.be.true
    })

    it('should return false when value is undefined', function() {
      expect(isOk()).to.be.false
    })

    it('should return false', function() {
      const ok = 'test'
      expect(isOk(ok)).to.be.false
    })
  })

  context('isError', function() {

    it('should return true', function() {
      const error = Error('test')
      expect(isError(error)).to.be.true
    })

    it('should return false when value is undefined', function() {
      expect(isError()).to.be.false
    })

    it('should return false', function() {
      const error = 'test'
      expect(isError(error)).to.be.false
    })
  })
})
