'use strict'

import { get } from 'lodash/fp'
import { Ok, Error } from 'folktale/result'
import asyncTry from '../../src/async-try'
import Chain from '../../src/chain'

describe('Chain', function() {

  context('should return Error', function() {

    it('when fn returns Promise.reject', async function() {

      const fn = () => Promise.reject(-1)
      const result = await new Chain().
        add(fn).
        run()

      expect(Error.hasInstance(result)).to.be.true
      expect(result.merge()).to.be.eq(-1)
    })

    it('when fn returns Result.Error', async function() {

      const fn = () => asyncTry(() => Promise.reject(-1))
      const result = await new Chain().
        add(fn).
        run()

      expect(Error.hasInstance(result)).to.be.true
      expect(result.merge()).to.be.eq(-1)
    })

    it('when validator returns Result.Error', async function() {

      const fn = () => Promise.resolve({ rows: [] })
      const isEmpty = (res) => get('rows.0', res)
        ? Ok(get('rows.0', res))
        : Error('Empty result')

      const result = await new Chain().
        add(fn, isEmpty).
        run()

      expect(Error.hasInstance(result)).to.be.true
      expect(result.merge()).to.be.eq('Empty result')
    })
  })

  context('should return Ok', function() {

    it('when fn returns Promise.resolve', async function() {

      const fn = () => Promise.resolve(1)
      const result = await new Chain().
        add(fn).
        run()

      expect(Ok.hasInstance(result)).to.be.true
      expect(result.getOrElse()).to.be.eq(1)
    })

    it('when fn returns Result.Ok', async function() {

      const fn = () => asyncTry(() => Promise.resolve(1))
      const result = await new Chain().
        add(fn).
        run()

      expect(Ok.hasInstance(result)).to.be.true
      expect(result.getOrElse()).to.be.eq(1)
    })

    it('when validator returns Result.Ok', async function() {

      const fn = () => Promise.resolve({ rows: [ 10 ] })
      const isEmpty = (res) => get('rows.0', res)
        ? Ok(get('rows.0', res))
        : Error('Empty result')

      const result = await new Chain().
        add(fn, isEmpty).
        run()

      expect(Ok.hasInstance(result)).to.be.true
      expect(result.getOrElse()).to.be.eq(10)
    })
  })
})
