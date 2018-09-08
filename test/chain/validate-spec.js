'use strict'

import { Ok, Error } from '../../src/type'
import validate from '../../src/chain/validate'

describe('Chain', function() {

  context('.validate', function() {

    it('should call validator when it is a "function"', function() {
      const expected = { ok: 'passed' }
      const validator = (res) => expected
      const result = validate(validator, Ok('test'))
      expect(result).to.be.deep.eq(expected)
    })

    it('should return the same (Ok) object when there is no validator', function() {
      const validator = {}
      const result = validate(validator, Ok('test'))
      expect(result.isOk()).to.be.true
      expect(result.get()).to.be.eq('test')
    })

    it('should return the same (Error) object when there is no validator', function() {
      const validator = {}
      const result = validate(validator, Error('error'))
      expect(result.isError()).to.be.true
      expect(result.get()).to.be.eq('error')
    })

    it('should wrap with Ok when validator is not a function and it is not Ok or Error', function() {
      const validator = undefined
      const expected = { ok: 'passed' }
      const result = validate(validator, expected)
      expect(result.isOk()).to.be.true
      expect(result.get()).to.be.eq(expected)
    })
  })
})
