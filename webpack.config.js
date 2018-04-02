const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function isDev({
    mode
}) {
    return mode === 'development'
}

function envPlugins(o) {
    let dev = isDev(o)
    if (dev) {
        htmlOpts = {
            minify: false,
            template: 'index.html'
        }
    } else {
        htmlOpts = {
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            template: 'index.html'
        }
    }
    return [
        new HtmlWebpackPlugin(htmlOpts),
        new webpack.DefinePlugin({
            "DEV": JSON.stringify(dev)
        })
    ]
}

module.exports = (env, args) => ({
    entry: './index.js',
    output: {
        hashDigest: 'hex',
        hashDigestLength: 8,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        ...envPlugins(args)
    ],
    devtool: isDev(args) ? 'inline-source-map' : false,
    module: {
        rules: [{
            test: /\.tag$/,
            exclude: /node_modules/,
            use: [{
                loader: 'riot-tag-loader',
                query: {
                    type: 'es6', // transpile the riot tags using babel
                    template: 'pug',
                    style: 'sass',
                    parsers: {
                        html: {
                            pug: (html, opts, url) => require('pug').compile(html),
                        },
                        css: {
                            sass: (tagName, css, opts, url) => require('node-sass').compile(css),
                        },
                    },
                    hot: isDev(args)
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
})