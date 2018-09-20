'use strict'

import Result, { Type, Ok, Error, asyncTry, chain, serial } from '../src'

describe('Result', function() {

  it('should be defined', function() {

    expect(Result).to.be.ok
    expect(Result.Type).to.be.ok
    expect(Result.Ok).to.be.ok
    expect(Result.Error).to.be.ok
    expect(Result.asyncTry).to.be.ok
    expect(Result.chain).to.be.ok
    expect(Result.serial).to.be.ok

    expect(Type).to.be.ok
    expect(Ok).to.be.ok
    expect(Error).to.be.ok
    expect(asyncTry).to.be.ok
    expect(chain).to.be.ok
    expect(serial).to.be.ok
  })
})