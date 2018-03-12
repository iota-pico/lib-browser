const path = require('path');
const fs = require('fs');

const pkgFolder = path.join(__dirname, './pkg');
const bootstrapFile = path.join(pkgFolder, 'bootstrap.js');

let isDir = false;
try {
    isDir = fs.lstatSync(pkgFolder).isDirectory();
} catch (err) { }
if (!isDir) {
    fs.mkdirSync(pkgFolder);
}
fs.writeFileSync(bootstrapFile, "exports.default = require(\"../dist/index\");");

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: bootstrapFile,
    output: {
        path: path.resolve(__dirname, './pkg'),
        filename: "iota-pico-lib-browser" + (isProd ? '.min' : '') + '.js',
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: {
            root: "IotaPico",
            amd: "@iota-pico/lib-browser",
            commonjs: "@iota-pico/lib-browser"
        },
        umdNamedDefine: true
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
    // devtool: undefined,//isProd ? undefined : "inline-source-map",
    // waiting on https://github.com/webpack/webpack/pull/6641
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env"
                        ],
                        "plugins": [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "helpers": false,
                                    "polyfill": false,
                                    "regenerator": true
                                }
                            ],
                            [
                                "babel-plugin-transform-builtin-extend",
                                {
                                    "globals": ["Error"]
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    node: {
        fs: "empty",
        path: "empty",
        console: false,
        global: false,
        process: false,
        __filename: false,
        __dirname: false,
        Buffer: false,
        setImmediate: false
    }
};
