'use strict'

import { get } from 'lodash/fp'
import { Ok, Error } from '../../src/type'
import asyncTry from '../../src/async-try'
import Chain from '../../src/chain'

describe('Chain', function() {

  context('should return Error', function() {

    it('when fn returns Promise.reject', async function() {

      const fn = () => Promise.reject(-1)
      const result = await new Chain().
        add(fn).
        run()

      expect(result.isError()).to.be.true
      expect(result.get()).to.be.eq(-1)
    })

    it('when fn returns Result.Error', async function() {

      const fn = () => asyncTry(() => Promise.reject(-1))
      const result = await new Chain().
        add(fn).
        run()

      expect(result.isError()).to.be.true
      expect(result.get()).to.be.eq(-1)
    })

    it('when last function returns Promise.reject', async function() {

      const fn1 = () => Promise.resolve(1)
      const fn2 = () => Promise.reject(-1)
      const result = await new Chain().
        add(fn1).
        add(fn2).
        run()

      expect(result.isError()).to.be.true
      expect(result.get()).to.be.eq(-1)
      expect(result.orElse('Error')).to.be.eq('Error')
    })

    it('when map returns Result.Error', async function() {

      const stub = sinon.stub()
      const fn = () => Promise.resolve({ rows: [] })
      const map = (res) => get('rows.0', res)
        ? Ok(get('rows.0', res))
        : Error('Empty result')

      const result = await new Chain().
        add(fn).
        map(map).
        add(stub).
        run()

      expect(stub).to.have.not.been.called
      expect(result.isError()).to.be.true
      expect(result.get()).to.be.eq('Empty result')
    })
  })

  context('should return Ok', function() {

    it('when fn returns Promise.resolve', async function() {

      const fn = () => Promise.resolve(1)
      const result = await new Chain().
        add(fn).
        run()

      expect(result.isOk()).to.be.true
      expect(result.get()).to.be.eq(1)
    })

    it('when both functions returns Promise.resolve', async function() {

      const fn1 = () => Promise.resolve(1)
      const fn2 = () => Promise.resolve(2)
      const result = await new Chain().
        add(fn1).
        add(fn2).
        run()

      expect(result.isOk()).to.be.true
      expect(result.get()).to.be.eq(2)
    })

    it('when fn returns Result.Ok', async function() {

      const fn = () => asyncTry(() => Promise.resolve(1))
      const result = await new Chain().
        add(fn).
        run()

      expect(result.isOk()).to.be.true
      expect(result.get()).to.be.eq(1)
    })

    it('when map returns Result.Ok', async function() {

      const fn = () => Promise.resolve({ rows: [ 10 ] })
      const map = (res) => get('rows.0', res.get())
        ? Ok(get('rows.0', res.get()))
        : Error('Empty result')

      const result = await new Chain().
        add(fn).
        map(map).
        run()

      expect(result.isOk()).to.be.true
      expect(result.get()).to.be.eq(10)
    })

    it('when call map and has another function to execute', async function() {

      const fn1 = () => Promise.resolve({ rows: [ 10 ] })
      const fn2 = (res) => Promise.resolve(res.get() * 2)
      const map = (res) => get('rows.0', res.get())
        ? Ok(get('rows.0', res.get()))
        : Error('Empty result')

      const result = await new Chain().
        add(fn1).
        map(map).
        add(fn2).
        run()

      expect(result.isOk()).to.be.true
      expect(result.get()).to.be.eq(20)
    })
  })
})