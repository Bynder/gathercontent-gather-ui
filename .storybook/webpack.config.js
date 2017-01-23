const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ['style', 'css', 'postcss-loader', 'sass'],
        include: path.resolve(__dirname, '../')
      }, {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file?name=styles/font-awesome/fonts/[name].[ext]'
      }
    ]
  },
  postcss: () => {
    return [
      require('autoprefixer')
    ];
  }
};
