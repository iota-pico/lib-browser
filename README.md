[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iotaeco/iota-pico-lib-browser/master/LICENSE) [![Build Status](https://travis-ci.org/iotaeco/iota-pico-lib-browser.svg?branch=master)](https://travis-ci.org/iotaeco/iota-pico-lib-browser) 
[![Coveralls](https://img.shields.io/coveralls/iotaeco/iota-pico-lib-browser.svg)](https://coveralls.io/github/iotaeco/iota-pico-lib-browser)

# IOTA Pico Framework Lib Browser

## Introduction

The IOTA Pico Framework Lib Browser is a combined library of all the components from:

* [@iota-pico/core](https://github.com/iotaeco/iota-pico-core) - Core functions and helper classes.
* [@iota-pico/data](https://github.com/iotaeco/iota-pico-data) - Data objects.
* [@iota-pico/api](https://github.com/iotaeco/iota-pico-api) - REST API.
* [@iota-pico/crypto](https://github.com/iotaeco/iota-pico-crypto) - Crypto functions Curl/Kerl/SHA3.
* [@iota-pico/business](https://github.com/iotaeco/iota-pico-business) - Business layer to perform transactions.
* [@iota-pico/pal-browser](https://github.com/iotaeco/iota-pico-pal-browser) - Platform abstraction layer for the browser.
* [@iota-pico/pow-box](https://github.com/iotaeco/iota-pico-pow-box) - Proof of Work using TestNet PowBox.
* [@iota-pico/pow-js](https://github.com/iotaeco/iota-pico-pow-js) - Proof of Work using JavaScript.
* [@iota-pico/pow-webgl](https://github.com/iotaeco/iota-pico-pow-webgl) - Proof of Work using WebGL.

## Installation

```shell
npm install @iota-pico/lib-browser
```

The library also has a dependency of [big-integer](https://www.npmjs.com/package/big-integer) which should get installed with the main package.

## TypeScript Definitions

TypeScript definitions can be found in the @iota-pico/lib-browser/pkg/iota-pico-lib-browser.d.ts but should be located automatically by your developments tools as they follow the standard referencing format in the package.json typings property.

## Usage

The library is compiled into a UMD that can be included directly in the browser or by using a module loader (Browserify/RequireJS/SystemJS/Webpack). You can see various usage scenarios in the following tutorials:

* [Usage Library Script Include](https://github.com/iotaeco/iota-pico-tutorials/libScriptInclude)
* [Usage Library Browserify](https://github.com/iotaeco/iota-pico-tutorials/libBrowserify)
* [Usage Library RequireJS](https://github.com/iotaeco/iota-pico-tutorials/libRequireJs)
* [Usage Library SystemJS](https://github.com/iotaeco/iota-pico-tutorials/libSystemJs)
* [Usage Library Webpack](https://github.com/iotaeco/iota-pico-tutorials/libWebpack)

## Documentation

The documentation for each part of the library can be found in it's relevant repository:

* [@iota-pico/core](https://github.com/iotaeco/iota-pico-core/docs/README.md)
* [@iota-pico/data](https://github.com/iotaeco/iota-pico-data/docs/README.md)
* [@iota-pico/api](https://github.com/iotaeco/iota-pico-api/docs/README.md)
* [@iota-pico/crypto](https://github.com/iotaeco/iota-pico-crypto/docs/README.md)
* [@iota-pico/business](https://github.com/iotaeco/iota-pico-business/docs/README.md)
* [@iota-pico/pal-browser](https://github.com/iotaeco/iota-pico-pal-browser/docs/README.md)
* [@iota-pico/pow-box](https://github.com/iotaeco/iota-pico-pow-box/docs/README.md)
* [@iota-pico/pow-js](https://github.com/iotaeco/iota-pico-pow-js/docs/README.md)
* [@iota-pico/pow-webgl](https://github.com/iotaeco/iota-pico-pow-webgl/docs/README.md)

## Tutorials

Additional tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iotaeco/iota-pico-tutorials)

