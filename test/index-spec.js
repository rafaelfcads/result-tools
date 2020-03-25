'use strict'

const { Type, _try, trySync } = require('../src')
const Result = require('../src')

describe('Result', function() {

  it('should be defined', function() {

    expect(Result).to.be.ok
    expect(Result.Type).to.be.ok
    expect(Result.Type.Ok).to.be.ok
    expect(Result.Type.Error).to.be.ok
    expect(Result._try).to.be.ok
    expect(Result.trySync).to.be.ok
    expect(Result.serial).to.be.ok
    expect(Result.chain).to.be.ok
    expect(Result.serialSync).to.be.ok
    expect(Result.chainSync).to.be.ok

    expect(Type).to.be.ok
    expect(Type.Ok).to.be.ok
    expect(Type.Error).to.be.ok
    expect(_try).to.be.ok
    expect(trySync).to.be.ok
  })
})
