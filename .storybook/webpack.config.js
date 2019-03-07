const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [{
          loader: 'file-loader'
        }],
        include: [path.resolve(__dirname, '../node_modules/font-awesome'), path.resolve(__dirname, './IBM-Plex')]
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
                require('autoprefixer'),
                require('pixrem'),
              ]
            }
          }
        }, {
          loader: 'sass-loader'
        }],
        include: [path.resolve(__dirname, '../'), path.resolve(__dirname, '../node_modules/font-awesome')]
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
