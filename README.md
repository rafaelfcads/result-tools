ResultTools
============

[![Chat on Gitter](https://img.shields.io/gitter/room/result-tools/discussion.svg?style=flat-square)](https://gitter.im/result-tools/discussion)
[![CircleCI](https://circleci.com/gh/rafaelfcads/result-tools.svg?style=svg)](https://circleci.com/gh/rafaelfcads/result-tools)
[![Coverage Status](https://coveralls.io/repos/github/rafaelfcads/result-tools/badge.svg?branch=master)](https://coveralls.io/github/rafaelfcads/result-tools?branch=master)
[![dependencies Status](https://david-dm.org/rafaelfcads/result-tools/status.svg)](https://david-dm.org/rafaelfcads/result-tools)
[![Known Vulnerabilities](https://snyk.io/test/github/rafaelfcads/result-tools/badge.svg?targetFile=package.json)](https://snyk.io/test/github/rafaelfcads/result-tools?targetFile=package.json)


ResultTools is a standard library for JavaScript functional programming.

The ResultTools library goal is to provide developers an auxiliary tool for modeling results of sync and async operations. Annuls the try/catch need, therefor, allowing better control of sequence operations, error handling and propagation.

Async operations can be performed by the **`_try`** and **`trySync`** operation to perform sync operations. 
The operation results are, **`Ok(successful Value)`** or **`Error(error Value)`** and can be accessed through the **`get`** or **`orElse`** operations. These results offer tests through the **`isOk`** or **`isError`** operations. Based on the operation results it is possible to use fluent features, such as **`.chain`**, **`.chainSync`**, **`.serial`**,  **`.serialSync`**, **`.map`** and **`.mapSync`** to execute sync and async sequence operations in a controlled way.
Also, there is no need to perform the try operation, since it can be used in isolation.

## Installation

ResultTools can be installed through [npm][]:

    $ npm install result-tools


### Example

- **`_try(fn)`** should be used to execute async operations. The operation result can be either Ok(successful Value) or Error(error Value).

  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Promise.reject(-1);

  Result._try(fnPromise);

  // ==> Result.Error(-1)
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Promise.resolve('Annuls the try/catch need');

  Result._try(fnPromise);

  // ==> Result.Ok('Annuls the try/catch need')
  ```


- **`trySync(fn)`** should be used to execute sync operations. The operation result can be either Ok(successful Value) or Error(error Value).

  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Error(-1);

  Result.trySync(fnPromise);

  // ==> Result.Error(-1)
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Ok('Annuls the try/catch need');

  Result.trySync(fnPromise);

  // ==> Result.Ok('Annuls the try/catch need')
  ```


- **`chain(fn)`** should be used to execute async operations where the arguments are the results from the last operation, generating a new result. 


  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Promise.reject(-1);

  //operation will not be performed
  const fnChain = (arg) => Promise.resolve(arg);

  Result
    ._try(fnPromise)
    .chain(fnChain)
    .run();

  // ==> Result.Error(-1)
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Promise.resolve('Annuls the');

  const fnChain = (arg) => Promise.resolve(`${arg} try/catch need`);

  Result
    ._try(fnPromise)
    .chain(fnChain)
    .run();

  // ==> Result.Ok('Annuls the try/catch need')
  ```

- **`chainSync(fn)`** should be used to execute sync operations where the arguments are the results from the last operation, generating a new result.

  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Error(-1);

  //operation will not be performed
  const fnChain = (arg) => Ok(arg);

  Result
    .trySync(fnPromise)
    .chainSync(fnChain)
    .run();

  // ==> Result.Error(-1)
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Ok('Annuls the');

  const fnChain = (arg) => Ok(`${arg} try/catch need`);

  Result
    .trySync(fnPromise)
    .chainSync(fnChain)
    .run();

  // ==> Result.Ok('Annuls the try/catch need')
  ```

- **`serial(fn, fnArgs)`** should be used to execute async operations where the arguments could be received, generating a new result. 

  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Promise.reject(-1);

  //operation will not be performed
  const fnSerial = (arg) => Promise.resolve(arg);

  Result
    ._try(fnPromise)
    .serial(fnSerial, 2)
    .run();

  // ==> Result.Error(-1)
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Promise.resolve(4);

  const fnSerial = (arg) => Promise.resolve(arg);

  Result
    ._try(fnPromise)
    .serial(fnSerial, 2)
    .run();

  // ==> Result.Ok([4, 2])
  ```

- **`serialSync(fn, fnArgs)`** should be used to execute sync operations where the arguments could be received, generating a new result.

  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Error(-1);

  //operation will not be performed
  const fnSerial = (arg) => Ok(arg);

  Result
    .trySync(fnPromise)
    .serialSync(fnSerial, 2)
    .run();

  // ==> Result.Error(-1)
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Ok(4);

  const fnSerial = (arg) => Ok(arg);

  Result
    .trySync(fnPromise)
    .serialSync(fnSerial, 2)
    .run();

  // ==> Result.Ok([4, 2])
  ```

- **`map(fn)`** should be used to execute async transformation operations where the arguments are the results from the last operation, generating a new result.

  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Promise.reject(-1);

  //operation will not be performed
  const fnMap = (arg) => Promise.resolve(arg);

  Result
    ._try(fnPromise)
    .map(fnMap)
    .run();

  // ==> Result.Error(-1)
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Promise.resolve('Annuls the');

  const fnMap = (arg) => Promise.resolve(`${arg} try/catch need`);

  Result
    ._try(fnPromise)
    .map(fnMap)
    .run();

  // ==> Result.Ok('Annuls the try/catch need')
  ```

- **`mapSync(fn)`** should be used to execute sync transformation operations where the arguments are the results from the last operation, generating a new result.

  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Error(-1);

  //operation will not be performed
  const fnMap = (arg) => Ok(arg);

  Result
    .trySync(fnPromise)
    .mapSync(fnMap)
    .run();

  // ==> Result.Error(-1)
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Ok('Annuls the');

  const fnMap = (arg) => Ok(`${arg} try/catch need`);

  Result
    .trySync(fnPromise)
    .mapSync(fnMap)
    .run();

  // ==> Result.Ok('Annuls the try/catch need')
  ```

- **`get`** should be used to access the result value.

  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Error(-1);

  Result
    .trySync(fnPromise)
    .get();

  // ==> -1
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Ok('Annuls the try/catch need');

  Result
    .trySync(fnPromise)
    .get();

  // ==> 'Annuls the try/catch need'
  ```

- **`orElse(arg)`** should be used to access the successful value or argument value in error cases.

  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Error(-1);

  Result
    .trySync(fnPromise)
    .orElse('There is an error');

  // ==> There is an error
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Ok('Annuls the try/catch need');

  Result
    .trySync(fnPromise)
    .orElse('There is an error');

  // ==> 'Annuls the try/catch need'
  ```

- **`isOk`** should be used to test the result value. Returns **True** if the result value is **Ok**.

  ###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Error(-1);

  Result
    .trySync(fnPromise)
    .isOk();

  // ==> false
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Ok('Annuls the try/catch need');

  Result
    .trySync(fnPromise)
    .isOk();

  // ==> true
  ```

- **`isError`** should be used to test the result value. Returns **True** if the result value is **Error**.

###### error case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Error(-1);

  Result
    .trySync(fnPromise)
    .isError();

  // ==> true
  ```

  ###### successful case:
  ```js
  const Result = require('result-tool');

  const fnPromise = () => Ok('Annuls the try/catch need');

  Result
    .trySync(fnPromise)
    .isError();

  // ==> false
  ```

## Supported platforms

Result Tools is written for the ECMAScript 2015 platform. If you're running your program in
an older platform, you'll need [es5-shim][] and [es6-shim][].

[es5-shim]: https://github.com/es-shims/es5-shim
[es6-shim]: https://github.com/es-shims/es6-shim


##### Having trouble using ResultTools?

  - [Join the discussion channel][gitter]


##### ResultTools discussion channels and information

  - [Discussion channel @ Gitter][gitter]
  - [Email the organization directly](mailto:resulttoolsfunctionalp@gmail.com)

## License

See the `LICENSE` file in this repository for detailed information.

[npm]: https://www.npmjs.com
[gitter]: https://gitter.im/result-tools/discussion