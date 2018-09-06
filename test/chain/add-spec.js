'use strict'

import add from '../../src/chain/add'

describe('Chain', function() {

  context('.add', function() {

    it('should return function(fns)', function() {
      const fn = add()
      expect(fn).to.be.a('function')
    })

    it('should return function(fn, validator)', function() {
      const fn = add()([])
      expect(fn).to.be.a('function')
    })

    it('should add (fn, validator) to fns and return methods', function() {

      const methods = {
        add: sinon.stub(),
        run: sinon.stub()
      }
      const fns = []
      const someFn = function() {}

      const result = add(methods)(fns)(someFn)
      expect(result).to.not.be.a('function')
      expect(result).to.be.deep.eq(methods)
      expect(fns.length).to.be.eq(1)
    })
  })
})
