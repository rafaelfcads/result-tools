'use strict'

import flow from '../flow'

const { serial, chain, map } = flow

export default function Ok(value) {

  return {

    isOk: () => true,
    isError: () => false,
    orElse: () => value,
    get: () => value,
    serial: serial(value),
    chain: chain(value),
    map: map(value)
    
  }
}
