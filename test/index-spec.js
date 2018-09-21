'use strict'

import Result, {
  Type, Ok, Error, _try, trySync, Serial, Chain, SerialSync, ChainSync
} from '../src'

describe('Result', function() {

  it('should be defined', function() {

    expect(Result).to.be.ok
    expect(Result.Type).to.be.ok
    expect(Result.Ok).to.be.ok
    expect(Result.Error).to.be.ok
    expect(Result._try).to.be.ok
    expect(Result.trySync).to.be.ok
    expect(Result.serial).to.be.ok
    expect(Result.chain).to.be.ok
    expect(Result.serialSync).to.be.ok
    expect(Result.chainSync).to.be.ok

    expect(Type).to.be.ok
    expect(Ok).to.be.ok
    expect(Error).to.be.ok
    expect(_try).to.be.ok
    expect(trySync).to.be.ok
    expect(Serial).to.be.ok
    expect(Chain).to.be.ok
    expect(SerialSync).to.be.ok
    expect(ChainSync).to.be.ok
  })
})
