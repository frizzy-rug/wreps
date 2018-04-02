const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        hashDigest: 'hex',
        hashDigestLength: 8,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            template: 'index.html'
        })
    ],
    // devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tag$/,
            exclude: /node_modules/,
            use: [{
                loader: 'riot-tag-loader',
                query: {
                    type: 'es6', // transpile the riot tags using babel
                    hot: true
                }
            }]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ["es2015-riot"]
                }
            }]
        }]
    }
}