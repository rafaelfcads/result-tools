'use strict';

var _fp = require('lodash/fp');

var _result = require('folktale/result');

var _result2 = _interopRequireDefault(_result);

var _asyncTry = require('./async-try');

var _asyncTry2 = _interopRequireDefault(_asyncTry);

var _chain = require('./chain');

var _chain2 = _interopRequireDefault(_chain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _fp.pipe)((0, _fp.set)('asyncTry', _asyncTry2.default), (0, _fp.set)('chain', _chain2.default))(_result2.default);