'use strict'

import flow from '../../src/async'

describe('async.flow', function() {

  it('should return methods flow', async function() {
    const fnPromise = () => Promise.reject(-1)
    const result = await flow().serial(fnPromise, [2])

    expect(result.serial).to.be.ok
    expect(result.chain).to.be.ok
    expect(result.map).to.be.ok
    expect(result.run).to.be.ok
  })

  it('should return Error when promise rejects', async function() {
    const fnPromise = () => Promise.reject(-1)
    const result = await flow().serial(fnPromise, [2]).run()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.orElse('error')).to.be.eq('error')
    expect(result.get()).to.be.eq(-1)
    expect(result.isError()).to.be.true
  })

  it('should return methods flow after serial execution', async function() {
    const fnPromise = (args) => Promise.resolve(args)
    const result = await flow().serial(fnPromise, [2])

    expect(result.serial).to.be.ok
    expect(result.chain).to.be.ok
    expect(result.map).to.be.ok
    expect(result.run).to.be.ok

  })

  it('should return Ok after serial and run execution', async function() {
    const fnPromise = (args) => Promise.resolve(args)
    const result = await flow().serial(fnPromise, [2]).run()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.members([2])
    expect(result.isOk()).to.be.true

  })

  it('should return methods flow after chain execution', async function() {
    const fnPromise = (args) => Promise.resolve(args)
    const result = await flow().chain(fnPromise)

    expect(result.serial).to.be.ok
    expect(result.chain).to.be.ok
    expect(result.map).to.be.ok
    expect(result.run).to.be.ok

  })

  it('should return Ok after chain and run execution', async function() {
    const fnPromise = () => Promise.resolve([2])
    const result = await flow().chain(fnPromise).run()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.members([2])
    expect(result.isOk()).to.be.true

  })

  it('should return methods flow after map execution', async function() {
    const fnPromise = (args) => Promise.resolve(args)
    const result = await flow().map(fnPromise)

    expect(result.serial).to.be.ok
    expect(result.chain).to.be.ok
    expect(result.map).to.be.ok
    expect(result.run).to.be.ok

  })

  it('should return Ok after map and run execution', async function() {
    const fnPromise = () => Promise.resolve([2])
    const result = await flow().map(fnPromise).run()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.members([2])
    expect(result.isOk()).to.be.true

  })
  
})
