const path = require('path');

module.exports = {
  entry: {
    bundle: './app/src/js/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app/dist'),
    publicPath: '/dist/',
    library: 'b64app'
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: [
          {
            loader: 'worker-loader'
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
