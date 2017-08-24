const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist/js'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [{
          loader: 'file-loader'
        }],
        include: path.resolve(__dirname, '../node_modules/font-awesome')
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          filename: 'styles/[name].[hash].css',
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer'),
                  require('pixrem'),
                ]
              }
            }
          }, {
            loader: 'sass-loader'
          }],
          includePaths: [
            path.resolve(__dirname, '../'),
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../node_modules/font-awesome'),
          ],
        }),
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'raw-loader'
        }]
      }
    ]
  },
};
