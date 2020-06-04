const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ],
  entry: {
    bundle: path.resolve(__dirname, 'src') + '/app.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    library: 'b64app'
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              name: 'js/workers/[name].[hash].js',
              publicPath: 'assets/dist/'
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        loader: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[hash].[ext]'
        }
      }
    ]
  }
};
