const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ['style', 'css', 'postcss-loader', 'sass'],
        include: path.resolve(__dirname, '../')
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
      require('autoprefixer')
    ];
  }
};
