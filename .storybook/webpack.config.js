const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, '../node_modules/font-awesome')
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'postcss-loader', 'sass'],
        include: [path.resolve(__dirname, '../'), path.resolve(__dirname, '../node_modules/font-awesome')]
      },
      {
        test: /.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },
  postcss: () => {
    return [
      require('autoprefixer'),
      require('pixrem'),
    ];
  }
};
