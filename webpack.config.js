var path = require('path');
var NODE_ENV = process.env.NODE_ENV || 'development';
var UglifyJSPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
    devtool: 'sourcemap',
    entry: {
        index: './index.js'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js'
    },
    plugins: {},
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react'],
            },
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.png$/,
            loader: "url-loader?limit=100000&mimetype=image/png"
        }, {
            test: /(\.scss|\.css)$/,
            include: /components/,
            loader: 'style!css!sass'
        }]
    },
    resolve: {
        extensions: ['', '.scss', '.js', '.json', '.png'],
        modulesDirectories: [
            'node_modules',
            'components'
        ]
    }
};
