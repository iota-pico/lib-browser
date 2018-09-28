const path = require('path');
const fs = require('fs');
const TerserJsPlugin = require('terser-webpack-plugin');

const pkgFolder = path.join(__dirname, './pkg');
const bootstrapFile = path.join(pkgFolder, 'bootstrap.js');

const isProd = process.env.NODE_ENV === 'production';
const outputLibName = process.env.LIB_VER === 'all' ? "" : `-${process.env.LIB_VER}`;

let isDir = false;
try {
    isDir = fs.lstatSync(pkgFolder).isDirectory();
} catch (err) { }
if (!isDir) {
    fs.mkdirSync(pkgFolder);
}
fs.writeFileSync(bootstrapFile, `exports.default = require("../dist/index-${process.env.LIB_VER}");`);

module.exports = {
    entry: bootstrapFile,
    output: {
        path: pkgFolder,
        filename: "iota-pico-lib-browser" + outputLibName + (isProd ? '.min' : '') + '.js',
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: {
            root: "IotaPico",
            amd: "@iota-pico/lib-browser",
            commonjs: "@iota-pico/lib-browser"
        },
        umdNamedDefine: true,
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    target: "web",
    externals: {
        "big-integer": {
            "amd": "big-integer",
            "commonjs": "big-integer",
            "commonjs2": "big-integer",
            "root": "bigInt"
        }
    },
    mode: isProd ? "production" : "development",
    devtool: isProd ? undefined : "inline-source-map",
    node: {
        fs: "empty",
        path: "empty",
        console: false,
        global: true,
        process: true,
        __filename: false,
        __dirname: false,
        Buffer: true,
        setImmediate: false
    },
    optimization: {
        minimizer: isProd ? [ new TerserJsPlugin() ] : []
    }
};
