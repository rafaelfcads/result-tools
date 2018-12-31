ResultTools
============

[![Chat on Gitter](https://img.shields.io/gitter/room/result-tools/discussion.svg?style=flat-square)](https://gitter.im/result-tools/discussion)
[![CircleCI](https://circleci.com/gh/rafaelfcads/result-tools.svg?style=svg)](https://circleci.com/gh/rafaelfcads/result-tools)
[![Coverage Status](https://coveralls.io/repos/github/rafaelfcads/result-tools/badge.svg?branch=master)](https://coveralls.io/github/rafaelfcads/result-tools?branch=master)
[![dependencies Status](https://david-dm.org/rafaelfcads/result-tools/status.svg)](https://david-dm.org/rafaelfcads/result-tools)
[![Known Vulnerabilities](https://snyk.io/test/github/rafaelfcads/result-tools/badge.svg?targetFile=package.json)](https://snyk.io/test/github/rafaelfcads/result-tools?targetFile=package.json)


ResultTools is a standard library for JavaScript functional programming.

The ResultTools library goal is to give developers an auxiliary tool for modeling results of sync and async operations. Voiding the try/catch need, therefor, providing better control of sequences operations, error handling and propagation.

Async operations may be performed by the **`_try`** or sync operations by the **`trySync`**. 
The operation results may be, Ok(successful Value) or Error(error Value). Based upon the operation results is   possible to use fluent features such as **`.chain`**, **`.chainSync`**, **`.serial`**,  **`.serialSync`**, **`.map`** and **`.mapSync`** to execute sync and async sequences operations in a controlled way.

## Installing

ResultTools can be installed through [npm][]:

    $ npm install result-tools


### Example

**`_try(fn)`** should be used to execute async operations. The operation results may be, Ok(successful Value) or Error(error Value).

error case:
```js
const Result = require('result-tool');

const fnPromise = () => Promise.reject(-1);

Result._try(fnPromise);

// ==> Result.Error(-1)
```

successful case:
```js
const Result = require('result-tool');

const fnPromise = () => Promise.resolve('Voiding the try/catch need');

Result._try(fnPromise);

// ==> Result.Ok('Voiding the try/catch need')
```


**`trySync(fn)`** should be used to execute sync operations. The operation results may be, Ok(successful Value) or Error(error Value).

error case:
```js
const Result = require('result-tool');

const fnPromise = () => Error(-1);

Result.trySync(fnPromise);

// ==> Result.Error(-1)
```

successful case:
```js
const Result = require('result-tool');

const fnPromise = () => Ok('Voiding the try/catch need');

Result.trySync(fnPromise);

// ==> Result.Ok('Voiding the try/catch need')
```


**`.chain(fn)`** should be used to execute async operations where this one will be receiving the lasts operations results like arguments to generate a new result.


error case:
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

successful case:
```js
const Result = require('result-tool');

const fnPromise = () => Promise.resolve('Voiding the');

const fnChain = (arg) => Promise.resolve(`${arg} try/catch need`);

Result
  ._try(fnPromise)
  .chain(fnChain)
  .run();

// ==> Result.Ok('Voiding the try/catch need')
```

**`.chainSync`** should be used to execute sync operations where this one will be receiving the lasts operations results like arguments to generate a new result.

**`.serial`** should be used to execute async operations where this one could receive arguments to generate a new result.

**`.serialSync`** should be used to execute sync operations where this one could receive arguments to generate a new result.

**`.map`** should be used to execute async transformation operations where this one will be receiving the lasts operations results like arguments to generate a new result.

**`.mapSync`** should be used to execute sync transformation operations where this one will be receiving the lasts operations results like arguments to generate a new result.

## Supported platforms

Result Tools is written for ECMAScript 2015 platforms. If you're running your program in
an older platform, you'll need [es5-shim][] and [es6-shim][].

[es5-shim]: https://github.com/es-shims/es5-shim
[es6-shim]: https://github.com/es-shims/es6-shim


##### Having trouble using ResultTools?

  - [Join the discussion channel][gitter]


##### ResultTools discussion channels and information

  - [Discussion channel @ Gitter][gitter]
  - [Email the organization directly](mailto:resulttoolsfunctionalp@gmail.com)

## Licence

See the `LICENCE` file in this repository for detailed information.

[npm]: https://www.npmjs.com
[gitter]: https://gitter.im/result-tools/discussion


