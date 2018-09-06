'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _result = require('folktale/result');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fns) {
  return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, fn, validator;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = void 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = (0, _getIterator3.default)(fns);

          case 6:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 18;
              break;
            }

            _step$value = (0, _slicedToArray3.default)(_step.value, 2), fn = _step$value[0], validator = _step$value[1];
            _context.t0 = validator;
            _context.next = 11;
            return fn(result);

          case 11:
            _context.t1 = _context.sent;
            result = (0, _context.t0)(_context.t1);

            if (!_result.Error.hasInstance(result)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt('break', 18);

          case 15:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t2 = _context['catch'](4);
            _didIteratorError = true;
            _iteratorError = _context.t2;

          case 24:
            _context.prev = 24;
            _context.prev = 25;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 27:
            _context.prev = 27;

            if (!_didIteratorError) {
              _context.next = 30;
              break;
            }

            throw _iteratorError;

          case 30:
            return _context.finish(27);

          case 31:
            return _context.finish(24);

          case 32:
            return _context.abrupt('return', result);

          case 33:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[4, 20, 24, 32], [25,, 27, 31]]);
  }));
};