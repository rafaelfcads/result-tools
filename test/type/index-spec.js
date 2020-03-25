'use strict'

const Type = require('../../src/type')

describe('Type', function() {

  it('should be defined', function() {

    expect(Type).to.be.ok
    expect(Type.Ok).to.be.ok
    expect(Type.isOk).to.be.ok
    expect(Type.Error).to.be.ok
    expect(Type.isError).to.be.ok
  })

  context('isOk', function() {

    it('should return true', function() {
      const ok = Type.Ok('test')
      expect(Type.isOk(ok)).to.be.true
    })

    it('should return false when value is undefined', function() {
      expect(Type.isOk()).to.be.false
    })

    it('should return false', function() {
      const ok = 'test'
      expect(Type.isOk(ok)).to.be.false
    })
  })

  context('isError', function() {

    it('should return true', function() {
      const error = Type.Error('test')
      expect(Type.isError(error)).to.be.true
    })

    it('should return false when value is undefined', function() {
      expect(Type.isError()).to.be.false
    })

    it('should return false', function() {
      const error = 'test'
      expect(Type.isError(error)).to.be.false
    })
  })
})
