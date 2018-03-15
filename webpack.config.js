const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "source-map",
  target: "web",
  entry: [
    "./index.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "animate-scroll.min.js",
    libraryTarget: 'umd',
    library: 'ScrollAnimate',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
}