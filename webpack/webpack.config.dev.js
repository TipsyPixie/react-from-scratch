const path = require('path');
const webpack = require('webpack');

const rootPath = path.resolve(__dirname, '..');
const srcPath = path.resolve(rootPath, 'src');
const destPath = path.resolve(rootPath, 'public');

module.exports = {
  mode: 'development',
  entry: `${srcPath}/index.jsx`,
  context: rootPath,
  output: {
    path: `${destPath}/scripts`,
    publicPath: `${destPath}/assets`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: ['transform-class-properties']
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
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
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
  optimization: {
    minimize: false
  }
};
