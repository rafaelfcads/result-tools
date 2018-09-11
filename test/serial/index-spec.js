'use strict'

import _ from 'lodash'
import { Ok, Error } from '../../src/type'
import Result from '../../src'

describe('serial', function() {

  it('should return Ok to serial add with one fn', async function() {

    const fn = () => Ok(18)

    const results = await Result
    .serial()
    .add(fn)()
    .run()

    expect(results[0].isOk()).to.be.true
    expect(results[0].get()).to.be.eq(18)

  })

  it('should return Ok to serial add with one fn', async function() {

    const fnPromiseArgs = () => Promise.resolve(Ok(18))

    const results = await Result
    .serial()
    .add(fnPromiseArgs)()
    .run()

    expect(results[0].isOk()).to.be.true
    expect(results[0].get()).to.be.eq(18)

  })
  it('should return Ok to serial add with one fn, one arg and one validation', async function() {

    const isEmpty = (validate) => validate
    const fnPromiseArgs = (fnArgs) => Promise.resolve(Ok(fnArgs))

    const results = await Result
    .serial()
    .add(fnPromiseArgs, 10)(isEmpty)
    .run()

    expect(results[0].isOk()).to.be.true
    expect(results[0].get()).to.be.eq(10)

  })

  it('should return Ok to serial add with two fn, two arg and two validation', async function() {

    const isEmpty = (validate) => validate
    const fnPromiseArgs = (fnArgs) => Promise.resolve(Ok(fnArgs))

    const results = await Result
    .serial()
    .add(fnPromiseArgs, 10)(isEmpty)
    .add(fnPromiseArgs, 20)(isEmpty)
    .run()

    expect(results[0].isOk()).to.be.true
    expect(results[0].get()).to.be.eq(10)
    expect(results[1].isOk()).to.be.true
    expect(results[1].get()).to.be.eq(20)

  })

  it('should return Ok to serial add with one fn, two args and one validation', async function() {

    const isEmpty = (validate) => validate
    const fnPromiseArgs = (fnArgFirst, fnArgSecond) => Promise.resolve(Ok({ fnArgFirst, fnArgSecond }))

    const results = await Result
    .serial()
    .add(fnPromiseArgs, 10, 20)(isEmpty)
    .run()

    expect(results[0].isOk()).to.be.true
    expect(_.get(results[0].get(), 'fnArgFirst')).to.be.eq(10)
    expect(_.get(results[0].get(), 'fnArgSecond')).to.be.eq(20)

  })

  it('should return Ok to serial add with two fns, one arg and one validation', async function() {

    const isEmpty = (validate) => validate
    const fnPromiseArgs = (fnArgs) => Promise.resolve(Ok(fnArgs))
    const fnPromise = () => Promise.resolve(Ok('Without Args'))

    const results = await Result
    .serial()
    .add(fnPromiseArgs, 33)(isEmpty)
    .add(fnPromise)(isEmpty)
    .run()

    expect(results[0].isOk()).to.be.true
    expect(results[0].get()).to.be.eq(33)
    expect(results[1].isOk()).to.be.true
    expect(results[1].get()).to.be.eq('Without Args')

  })

  it('should return Ok to serial add with one fn and one arg', async function() {

    const fnPromiseArgs = (fnArgs) => Promise.resolve(Ok(fnArgs))
    
    const results = await Result
    .serial()
    .add(fnPromiseArgs, 10)()
    .run()

    expect(results[0].isOk()).to.be.true
    expect(results[0].get()).to.be.eq(10)

  })

  it('should return Ok to serial add with two fns and one arg and one validation', async function() {

    const isEmpty = (validate) => validate
    const fnPromiseArgs = (fnArgs) => Promise.resolve(Ok(fnArgs))
    const fnPromise = () => Promise.resolve(Ok('Without Args'))

    const results = await Result
    .serial()
    .add(fnPromiseArgs, 33)()
    .add(fnPromise)(isEmpty)
    .run()

    expect(results[0].isOk()).to.be.true
    expect(results[0].get()).to.be.eq(33)
    expect(results[1].isOk()).to.be.true
    expect(results[1].get()).to.be.eq('Without Args')

  })

  it('should return Error when it is not a function', async function() {

    const isEmpty = (validate) => validate
    const fnPromiseErrorArgs = () => Promise.resolve(Error('Error'))
    const fnPromiseArgs = (fnArgs) => Promise.resolve(Ok(fnArgs))

    const results = await Result
    .serial()
    .add(fnPromiseErrorArgs)(isEmpty)
    .add(fnPromiseArgs)(isEmpty)
    .run()

    expect(results[0].isError()).to.be.true

  })

})
