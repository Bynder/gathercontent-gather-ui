const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const Fiber = require('fibers');

module.exports = {
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [{
          loader: 'file-loader'
        }],
        include: [path.resolve(__dirname, './IBM-Plex')]
      },
      {
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('tailwindcss'),
                require('autoprefixer'),
                require('pixrem'),
              ]
            }
          }
        }, {
          loader: 'sass-loader',
          options: {
            implementation: require("sass"),
            fiber: Fiber
          }
        }],
        include: [path.resolve(__dirname, '../')]
      },
      {
        test: /.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }],
        include: path.resolve(__dirname, '../')
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
