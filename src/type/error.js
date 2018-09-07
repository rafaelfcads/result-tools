'use strict'

export default function Ok(value) {

  return {

    isOk: () => false,
    isError: () => true,
    orElse: (val) => val,
    get: () => value
  }
}
