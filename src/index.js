'use strict'

const Type = require('./type')
const Ok = require('./type/ok')
const Error = require('./type/error')
const _try = require('./async/try')
const trySync = require('./sync/try')
const flow = require('./async')
const flowSync = require('./sync')

const serial = (fn, ...opts) => flow().serial(fn, ...opts)
const chain = (fn) => flow().chain(fn)
const serialSync = (fn, ...opts) => flowSync().serialSync(fn, ...opts)
const chainSync = (fn) => flowSync().chainSync(fn)

module.exports.Type = Type
module.exports.Ok = Ok
module.exports.Error = Error
module.exports._try = _try
module.exports.trySync = trySync
module.exports.serial = serial
module.exports.chain = chain
module.exports.serialSync = serialSync
module.exports.chainSync = chainSync
