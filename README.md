[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iota-pico/iota-pico-lib-browser/master/LICENSE) [![Build Status](https://travis-ci.org/iota-pico/iota-pico-lib-browser.svg?branch=master)](https://travis-ci.org/iota-pico/iota-pico-lib-browser) 


# IOTA Pico Framework Lib for Browser

The IOTA Pico Framework library is an alternative to the official [iota.lib.js](https://github.com/iotaledger/iota.lib.js)

The library is a bundle of all the following components:

* [@iota-pico/core](https://github.com/iota-pico/iota-pico-core) - Core functions and helper classes.
* [@iota-pico/data](https://github.com/iota-pico/iota-pico-data) - Data objects.
* [@iota-pico/api](https://github.com/iota-pico/iota-pico-api) - REST API.
* [@iota-pico/crypto](https://github.com/iota-pico/iota-pico-crypto) - Crypto functions Curl/Kerl/SHA3.
* [@iota-pico/business](https://github.com/iota-pico/iota-pico-business) - Business layer to perform transactions.
* [@iota-pico/pal-browser](https://github.com/iota-pico/iota-pico-pal-browser) - Platform abstraction layer for the browser.
* [@iota-pico/pow-box](https://github.com/iota-pico/iota-pico-pow-box) - Proof of Work using TestNet PowBox. (for TestNet)
* [@iota-pico/pow-js](https://github.com/iota-pico/iota-pico-pow-js) - Proof of Work using JavaScript. (Very Slow - Single Threaded)
* [@iota-pico/pow-wasm](https://github.com/iota-pico/iota-pico-pow-wasm) - Proof of Work using WebAssembly. (Slow - Single-Threaded)
* [@iota-pico/pow-webgl](https://github.com/iota-pico/iota-pico-pow-webgl) - Proof of Work using WebGL. (Best Choice - Multi-Threaded)

If you want to run on NodeJS try the alternate version [@iota-pico/lib-nodejs](https://github.com/iota-pico/iota-pico-lib-nodejs)

# Installation

```shell
npm install @iota-pico/lib-browser --save
```

The library also has a dependency of [big-integer](https://www.npmjs.com/package/big-integer) which should get installed with the main package.

There are two variants of the library

* development - which is not minified and includes source maps in [pkg/iota-pico-lib-browser.js](https://github.com/iota-pico/lib-browser/blob/master/pkg/iota-pico-lib-browser.js)
* production - which is minified and has no source maps in [pkg/iota-pico-lib-browser.min.js](https://github.com/iota-pico/lib-browser/blob/master/pkg/iota-pico-lib-browser.min.js)

If you don't want all of the proof of work algorithms, there are some alternative smaller packages:

* [pkg/iota-pico-lib-browser-none.js](https://github.com/iota-pico/lib-browser/blob/master/pkg/iota-pico-lib-browser-none.js) - No Proof Of Work algorithms
* [pkg/iota-pico-lib-browser-none.min.js](https://github.com/iota-pico/lib-browser/blob/master/pkg/iota-pico-lib-browser-none.min.js) - No Proof Of Work algorithms
* [pkg/iota-pico-lib-browser-webgl.js](https://github.com/iota-pico/lib-browser/blob/master/pkg/iota-pico-lib-browser-webgl.js) - Fastest for Platform
* [pkg/iota-pico-lib-browser-webgl.min.js](https://github.com/iota-pico/lib-browser/blob/master/pkg/iota-pico-lib-browser-webgl.min.js) - Fastest for Platform

# TypeScript Definitions

TypeScript definitions can be found in the [pkg/iota-pico-lib-browser.d.ts](https://github.com/iota-pico/lib-browser/blob/master/pkg/iota-pico-lib-browser.d.ts) and should be located automatically by your developments tools.

# Usage

The library is compiled into a UMD that can be included directly in the browser or by using a module loader (Browserify/RequireJS/SystemJS/Webpack). You can see various usage scenarios in the following browser tutorials:

* [Usage Library Script Include](https://github.com/iota-pico/iota-pico-tutorials/blob/master/using-library/browser/getNodeInfoScriptInclude/README.md)
* [Usage Library Browserify](https://github.com/iota-pico/iota-pico-tutorials/blob/master/using-library/browser/getNodeInfoBrowserify/README.md)
* [Usage Library RequireJS](https://github.com/iota-pico/iota-pico-tutorials/blob/master/using-library/browser/getNodeInfoRequireJS/README.md)
* [Usage Library SystemJS](https://github.com/iota-pico/iota-pico-tutorials/blob/master/using-library/browser/getNodeInfoSystemJS/README.md)
* [Usage Library Webpack](https://github.com/iota-pico/iota-pico-tutorials/blob/master/using-library/browser/getNodeInfoWebpack/README.md)

# Documentation

The documentation for each part of the library can be found in it's relevant repository:

* [@iota-pico/core documentation](https://github.com/iota-pico/iota-pico-core/blob/master/docs/README.md)
* [@iota-pico/data documentation](https://github.com/iota-pico/iota-pico-data/blob/master/docs/README.md)
* [@iota-pico/api documentation](https://github.com/iota-pico/iota-pico-api/blob/master/docs/README.md)
* [@iota-pico/crypto documentation](https://github.com/iota-pico/iota-pico-crypto/blob/master/docs/README.md)
* [@iota-pico/business documentation](https://github.com/iota-pico/iota-pico-business/blob/master/docs/README.md)
* [@iota-pico/pal-browser documentation](https://github.com/iota-pico/iota-pico-pal-browser/blob/master/docs/README.md)
* [@iota-pico/pow-box documentation](https://github.com/iota-pico/iota-pico-pow-box/blob/master/docs/README.md)
* [@iota-pico/pow-js documentation](https://github.com/iota-pico/iota-pico-pow-js/blob/master/docs/README.md)
* [@iota-pico/pow-wasm documentation](https://github.com/iota-pico/iota-pico-pow-wasm/blob/master/docs/README.md)
* [@iota-pico/pow-webgl documentation](https://github.com/iota-pico/iota-pico-pow-webgl/blob/master/docs/README.md)

# Tutorials

Tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iota-pico/iota-pico-tutorials)

# Contributing

Contributions are always welcome to the project. Feel free to raise issues, create pull requests or just make suggestions.

# Authors

Come and find us on the IOTA [Discord](https://discordapp.com/invite/fNGZXvh) development channels

* **Martyn Janes** - *obany* - ([https://github.com/obany](https://github.com/obany))

# Donations

IOTA donations are always welcome :smile:

![QR Code for Trinity](https://raw.githubusercontent.com/iota-pico/lib-browser/master/donation.png)

```shell
QWJXX99QDEYWUWXEGA9QXSNOWOKHMFKCMSZTXDFLRZAFQRPQTHQDXSZWQQTAHNDNRYHMIKJYWQLKTFHBWSAOJDHAMB
```

# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/iota-pico/lib-browser/blob/master/LICENSE) file for details.
