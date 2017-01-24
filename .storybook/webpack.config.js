const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'postcss-loader', 'sass'],
        include: [path.resolve(__dirname, '../styles'), path.resolve(__dirname, '../node_modules/')]
      }, {
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
