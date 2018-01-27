var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
    }
}
