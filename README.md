[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iotaeco/iota-pico-lib-browser/master/LICENSE) [![Build Status](https://travis-ci.org/iotaeco/iota-pico-lib-browser.svg?branch=master)](https://travis-ci.org/iotaeco/iota-pico-lib-browser) 


# IOTA Pico Framework Lib Browser

## Introduction

The IOTA Pico Framework Lib Browser is a combined library of all the following components:

* [@iota-pico/core](https://github.com/iotaeco/iota-pico-core) - Core functions and helper classes.
* [@iota-pico/data](https://github.com/iotaeco/iota-pico-data) - Data objects.
* [@iota-pico/api](https://github.com/iotaeco/iota-pico-api) - REST API.
* [@iota-pico/crypto](https://github.com/iotaeco/iota-pico-crypto) - Crypto functions Curl/Kerl/SHA3.
* [@iota-pico/business](https://github.com/iotaeco/iota-pico-business) - Business layer to perform transactions.
* [@iota-pico/pal-browser](https://github.com/iotaeco/iota-pico-pal-browser) - Platform abstraction layer for the browser.
* [@iota-pico/pow-box](https://github.com/iotaeco/iota-pico-pow-box) - Proof of Work using TestNet PowBox. (for TestNet)
* [@iota-pico/pow-js](https://github.com/iotaeco/iota-pico-pow-js) - Proof of Work using JavaScript. (Very Slow - Single Threaded)
* [@iota-pico/pow-webgl](https://github.com/iotaeco/iota-pico-pow-webgl) - Proof of Work using WebGL. (Best Choice - Multi-Threaded)

## Installation

```shell
npm install @iota-pico/lib-browser
```

The library also has a dependency of [big-integer](https://www.npmjs.com/package/big-integer) which should get installed with the main package.

There are two variants of the library

* development - which is not minified and includes source maps in @iota-pico/lib-browser/pkg/iota-pico-lib-browser.js

* production - which is minified and has no  source maps in @iota-pico/lib-browser/pkg/iota-pico-lib-browser.min.js

## TypeScript Definitions

TypeScript definitions can be found in the @iota-pico/lib-browser/pkg/iota-pico-lib-browser.d.ts and should be located automatically by your developments tools.

## Usage

The library is compiled into a UMD that can be included directly in the browser or by using a module loader (Browserify/RequireJS/SystemJS/Webpack). You can see various usage scenarios in the following browser tutorials:

* [Usage Library Script Include](https://github.com/iotaeco/iota-pico-tutorials/using-library/browser/getNodeInfoScriptInclude/README.md)
* [Usage Library Browserify](https://github.com/iotaeco/iota-pico-tutorials/using-library/browser/getNodeInfoBrowserify/README.md)
* [Usage Library RequireJS](https://github.com/iotaeco/iota-pico-tutorials/using-library/browser/getNodeInfoRequireJS/README.md)
* [Usage Library SystemJS](https://github.com/iotaeco/iota-pico-tutorials/using-library/browser/getNodeInfoSystemJS/README.md)
* [Usage Library Webpack](https://github.com/iotaeco/iota-pico-tutorials/using-library/browser/getNodeInfoWebpack/README.md)

## Documentation

The documentation for each part of the library can be found in it's relevant repository:

* [@iota-pico/core documentation](https://github.com/iotaeco/iota-pico-core/docs/README.md)
* [@iota-pico/data documentation](https://github.com/iotaeco/iota-pico-data/docs/README.md)
* [@iota-pico/api documentation](https://github.com/iotaeco/iota-pico-api/docs/README.md)
* [@iota-pico/crypto documentation](https://github.com/iotaeco/iota-pico-crypto/docs/README.md)
* [@iota-pico/business documentation](https://github.com/iotaeco/iota-pico-business/docs/README.md)
* [@iota-pico/pal-browser documentation](https://github.com/iotaeco/iota-pico-pal-browser/docs/README.md)
* [@iota-pico/pow-box documentation](https://github.com/iotaeco/iota-pico-pow-box/docs/README.md)
* [@iota-pico/pow-js documentation](https://github.com/iotaeco/iota-pico-pow-js/docs/README.md)
* [@iota-pico/pow-webgl documentation](https://github.com/iotaeco/iota-pico-pow-webgl/docs/README.md)

## Tutorials

Additional tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iotaeco/iota-pico-tutorials)

