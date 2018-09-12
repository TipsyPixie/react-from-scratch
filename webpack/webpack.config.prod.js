const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');
const srcPath = path.resolve(rootPath, 'src');
const destPath = path.resolve(rootPath, 'public');

module.exports = {
  mode: 'production',
  entry: `${srcPath}/index.jsx`,
  context: rootPath,
  output: {
    path: `${destPath}/scripts`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-flow'
          ],
          configFile: false,
          plugins: ['@babel/plugin-proposal-class-properties']
        }
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
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  bail: true,
  watch: false,
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({})
    ]
  }
};
