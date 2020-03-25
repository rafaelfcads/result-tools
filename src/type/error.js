'use strict'

module.exports = function Error(value) {

  const methods = {

    isOk: () => false,
    isError: () => true,
    orElse: (val) => val,
    get: () => value,
    serial: () => methods,
    chain: () => methods,
    serialSync: () => methods,
    chainSync: () => methods,
    
  }
  return methods
}
