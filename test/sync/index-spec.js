'use strict'

const flow = require('../../src/sync')
const { Error } = require('../../src/type')

describe('sync.flow', function() {

  it('should return methods flow', async function() {
    const fnPromise = () => Error(-1)
    const result = flow().serialSync(fnPromise, [2])

    expect(result.serialSync).to.be.ok
    expect(result.chainSync).to.be.ok
    expect(result.mapSync).to.be.ok
    expect(result.run).to.be.ok
  })

  it('should return Error when promise rejects', async function() {
    const fnPromise = () => Error(-1)
    const result = flow().serialSync(fnPromise, [2]).run()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.orElse('error')).to.be.eq('error')
    expect(result.get()).to.be.eq(-1)
    expect(result.isError()).to.be.true
  })

  it('should return methods flow after serial execution', async function() {
    const fnPromise = (args) => args
    const result = flow().serialSync(fnPromise, [2])

    expect(result.serialSync).to.be.ok
    expect(result.chainSync).to.be.ok
    expect(result.mapSync).to.be.ok
    expect(result.run).to.be.ok
  })

  it('should return Ok after serial and run execution', async function() {
    const fnPromise = (args) => args
    const result = flow().serialSync(fnPromise, [2]).run()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.members([2])
    expect(result.isOk()).to.be.true
  })

  it('should return methods flow after chain execution', async function() {
    const fnPromise = (args) => args
    const result = flow().chainSync(fnPromise)

    expect(result.serialSync).to.be.ok
    expect(result.chainSync).to.be.ok
    expect(result.mapSync).to.be.ok
    expect(result.run).to.be.ok
  })

  it('should return Ok after chain and run execution', async function() {
    const fnPromise = () => [2]
    const result = flow().chainSync(fnPromise).run()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.members([2])
    expect(result.isOk()).to.be.true
  })

  it('should return methods flow after map execution', async function() {
    const fnPromise = (args) => args
    const result = flow().mapSync(fnPromise)

    expect(result.serialSync).to.be.ok
    expect(result.chainSync).to.be.ok
    expect(result.mapSync).to.be.ok
    expect(result.run).to.be.ok
  })

  it('should return Ok after map and run execution', async function() {
    const fnPromise = () => [2]
    const result = flow().mapSync(fnPromise).run()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.members([2])
    expect(result.isOk()).to.be.true
  })
  
})
