'use strict'

import run from '../../src/async/run'
import serial from '../../src/async/serial'
import chain from '../../src/async/chain'
import map from '../../src/async/map'

describe('async.run', function() {

  it('should return Error when promise rejects', async function() {
    const fnPromise = () => Promise.reject(-1)
    const firstSerialExecution = [serial, fnPromise, [2]]
    const fns = [firstSerialExecution]
    const result = await run(fns)()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.orElse('error')).to.be.eq('error')
    expect(result.get()).to.be.eq(-1)
    expect(result.isError()).to.be.true
  })

  it('should return both serialized results encapsulated by the Result object', async function() {
    const fnPromise = (args) => Promise.resolve([args])
    const firstSerialExecution = [serial, fnPromise, [2]]
    const secondSerialExecution = [serial, fnPromise, [4]]
    const fns = [firstSerialExecution, secondSerialExecution]
    const result = await run(fns)()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.deep.members([[2], [4]])
    expect(result.isOk()).to.be.true
  })

  it('should return undefined in chain result encapsulated by the Result object', async function() {
    const fnPromise = (args) => Promise.resolve(args)
    const firstChainExecution = [chain, fnPromise]
    const fns = [firstChainExecution]
    const result = await run(fns)()
    
    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.be.an('undefined')
    expect(result.isOk()).to.be.true
  })

  it('should return chain result encapsulated by the Result object', async function() {
    const fnSerialPromise = (args) => Promise.resolve([args])
    const fnChainPromise = (argOne, argTwo) => Promise.resolve([Number(argOne) + Number(argTwo)])
    const firstSerialExecution = [serial, fnSerialPromise, [1]]
    const secondSerialExecution = [serial, fnSerialPromise, [2]]
    const firstChainExecution = [chain, fnChainPromise]
    const fns = [firstSerialExecution, secondSerialExecution, firstChainExecution]
    const result = await run(fns)()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.deep.members([3])
    expect(result.isOk()).to.be.true
  })

  it('should return undefined in map result encapsulated by the Result object', async function() {
    const fnPromise = (args) => Promise.resolve(args)
    const firstChainExecution = [map, fnPromise]
    const fns = [firstChainExecution]
    const result = await run(fns)()
    
    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.be.an('undefined')
    expect(result.isOk()).to.be.true
  })

  it('should return map result encapsulated by the Result object', async function() {
    const fnSerialPromise = (args) => Promise.resolve([args])
    const fnChainPromise = (argOne, argTwo) => Promise.resolve([Number(argOne) + Number(argTwo)])
    const firstSerialExecution = [serial, fnSerialPromise, [1]]
    const secondSerialExecution = [serial, fnSerialPromise, [2]]
    const firstChainExecution = [map, fnChainPromise]
    const fns = [firstSerialExecution, secondSerialExecution, firstChainExecution]
    const result = await run(fns)()

    expect(result).to.have.all.keys('isError', 'chain', 'chainSync', 'get', 'isOk', 'orElse', 'serial', 'serialSync')
    expect(result.get()).to.have.deep.members([3])
    expect(result.isOk()).to.be.true
  })
  
})
