const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
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
  devtool: "eval-source-map",
  target: "web",
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  bail: true,
  watch: true,
  watchOptions: {
    aggregateTimeout: 5000
  },
  optimization: {
    minimize: false
  }
};
