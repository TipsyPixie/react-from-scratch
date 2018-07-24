const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  context: path.resolve(__dirname, '..'),
  output: {
    path: path.resolve(__dirname, '..', 'public', 'scripts'),
    publicPath: path.resolve(__dirname, '..', 'public', 'assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env', 'flow', 'react']
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          'htmllint-loader',
          'html-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devtool: 'eval-source-map',
  target: 'web',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  bail: false,
  watch: false,
  watchOptions: {
    aggregateTimeout: 5000
  },
  optimization: {
    minimize: false
  }
};
