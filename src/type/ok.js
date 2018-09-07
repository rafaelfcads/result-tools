'use strict'

export default function Ok(value) {

  return {

    isOk: () => true,
    isError: () => false,
    orElse: () => value,
    get: () => value
  }
}
