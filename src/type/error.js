'use strict'

export default function Error(value) {

  return {

    isOk: () => false,
    isError: () => true,
    orElse: (val) => val,
    get: () => value
  }
}
