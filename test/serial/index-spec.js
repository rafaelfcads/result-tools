'use strict'

import { first } from 'lodash'
import asyncTry from '../../src/try'
import Result from '../../src'

describe('Serial', function() {

  context('should return Error', function() {

    it.only('when fn returns Promise.reject', async function() {

      const fn = (raf) => Promise.resolve(raf)
      const fn1 = () => Promise.resolve(2)
      const fn3 = (a, b) => Promise.resolve(a+b)
      const fn4 = (a, b) => Promise.resolve(a+b)

      const teste2 = await Result
        .serial(fn, 5)
        .serial(fn1)
        .map(fn3)
        .run()
      console.log(teste2.get())

      // const siri = await teste
      //   .serial(fn)
      //   .serial(fn)
      //   .run()
 


      // console.log(siri.get())

      // expect(result.isError()).to.be.true
      // expect(result.get()).to.be.eq(-1)

    })

    it('when fn returns Result.Error', async function() {

      const fn = () => asyncTry(() => Promise.reject(-1))
      const result = await new Serial().
        add(fn).
        run()

      expect(result.isError()).to.be.true
      expect(result.get()).to.be.eq(-1)
    })

    it('when last function returns Promise.reject', async function() {

      const fn1 = () => Promise.resolve(1)
      const fn2 = () => Promise.reject(-1)
      const result = await new Serial().
        add(fn1).
        add(fn2).
        run()

      expect(result.isError()).to.be.true
      expect(result.get()).to.be.eq(-1)
      expect(result.orElse('Error')).to.be.eq('Error')
    })

    it('when fn(args) returns Promise.reject', async function() {

      const fn = () => Promise.reject(-1)
      const result = await new Serial().
        add(fn, 2).
        run()

      expect(result.isError()).to.be.true
      expect(result.get()).to.be.eq(-1)
    })

    it('when fn(args) returns Result.Error', async function() {

      const fn = () => asyncTry(() => Promise.reject(-1))
      const result = await new Serial().
        add(fn, 5).
        run()

      expect(result.isError()).to.be.true
      expect(result.get()).to.be.eq(-1)
    })

    it('when last fn(args) returns Promise.reject', async function() {

      const fn1 = () => Promise.resolve(1)
      const fn2 = () => Promise.reject(-1)
      const result = await new Serial().
        add(fn1).
        add(fn2, 7).
        run()

      expect(result.isError()).to.be.true
      expect(result.get()).to.be.eq(-1)
      expect(result.orElse('Error')).to.be.eq('Error')
    })
  })

  context('should return Ok', function() {

    it('when fn returns Promise.resolve', async function() {

      const fn = () => Promise.resolve(1)
      const result = await new Serial().
        add(fn).
        run()

      expect(result.isOk()).to.be.true
      expect(first(result.get())).to.be.eq(1)

    })

    it('when both fns returns Promise.resolve', async function() {

      const fn1 = () => Promise.resolve(1)
      const fn2 = () => Promise.resolve(2)
      const result = await new Serial().
        add(fn1).
        add(fn2).
        run()

      expect(result.isOk()).to.be.true
      expect(first(result.get())).to.be.eq(1)
      expect(result.get()[1]).to.be.eq(2)
      
    })

    it('when fn returns Result.Ok', async function() {

      const fn = () => asyncTry(() => Promise.resolve(1))
      const result = await new Serial().
        add(fn).
        run()

        expect(result.isOk()).to.be.true
        expect(first(result.get())).to.be.eq(1)
    })

    it('when fn(args) returns Promise.resolve', async function() {

      const fn = (args) => Promise.resolve(args)
      const result = await new Serial().
        add(fn, 22).
        run()

      expect(result.isOk()).to.be.true
      expect(first(result.get())).to.be.eq(22)

    })

    it('when both fns returns Promise.resolve', async function() {

      const fn1 = (arg) => Promise.resolve(arg)
      const fn2 = (arg) => Promise.resolve(arg)
      const result = await new Serial().
        add(fn1, 33).
        add(fn2, 55).
        run()

      expect(result.isOk()).to.be.true
      expect(first(result.get())).to.be.eq(33)
      expect(result.get()[1]).to.be.eq(55)
      
    })

    it('when fn(args) returns Result.Ok', async function() {

      const fn = (arg) => asyncTry(() => Promise.resolve(arg))
      const result = await new Serial().
        add(fn, 15).
        run()

        expect(result.isOk()).to.be.true
        expect(first(result.get())).to.be.eq(15)
    })
  })
})