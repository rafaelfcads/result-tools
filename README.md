ResultTools
============

[![Chat on Gitter](https://img.shields.io/gitter/room/result-tools/discussion.svg?style=flat-square)](https://gitter.im/result-tools/discussion)
[![CircleCI](https://circleci.com/gh/rafaelfcads/result-tools.svg?style=svg)](https://circleci.com/gh/rafaelfcads/result-tools)
[![Coverage Status](https://coveralls.io/repos/github/rafaelfcads/result-tools/badge.svg?branch=master)](https://coveralls.io/github/rafaelfcads/result-tools?branch=master)
[![dependencies Status](https://david-dm.org/rafaelfcads/result-tools/status.svg)](https://david-dm.org/rafaelfcads/result-tools)
[![Known Vulnerabilities](https://snyk.io/test/github/rafaelfcads/result-tools/badge.svg?targetFile=package.json)](https://snyk.io/test/github/rafaelfcads/result-tools?targetFile=package.json)


ResultTools is a standard library for JavaScript functional programming.
The ResultTools library goal is to give developers an auxiliary tool for modeling results of sync and async operations. Voiding the try/catch need, therefor, providing better control of sequences operations, error handling and propagation.
The operation results may be, Ok(successful Value) or Error(error Value). Based upon the operation results is   possible to use fluent features such as .chain, .serial and .map to execute sync and async sequences operations in a controlled way.

> `.chain` should be used to execute operations where this one will be receiving the lasts operations results like arguments to generate a new result.
> `.serial` should be used to execute operations where this one could receive arguments to generate a new result.
> `.map` should be used to execute transformation operations where this one will be receiving the lasts operations results like arguments to generate a new result.


## Installing

Result Tools can be installed through [npm][]:

    $ npm install result-tools

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


