const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  context: path.resolve(__dirname, '..'),
  output: {
    path: path.resolve(__dirname, '..', 'public', 'scripts'),
    publicPath: path.resolve(__dirname, '..', 'public', 'assets'),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "babel-loader",
        options: {
          presets: ["env", "flow"]
        },
      },
      {
        test: /\.html$/,
        use: [
          "htmllint-loader",
          "html-loader"
        ]
      },
    ]
  },
  devtool: "source-map",
  target: "web",
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
