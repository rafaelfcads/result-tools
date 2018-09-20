'use strict'

export default function Error(value) {

  const methods = {

    isOk: () => false,
    isError: () => true,
    orElse: (val) => val,
    get: () => value,
    serial: () => methods,
    chain: () => methods,
    map: () => methods
    
  }
  return methods
}
