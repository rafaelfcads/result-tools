'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _run = require('./run');

var _run2 = _interopRequireDefault(_run);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var fns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


  var methods = {
    add: (0, _add2.default)(methods)(fns),
    run: (0, _run2.default)(fns)
  };
  return methods;
};