// используем CJS, т.к. webpack запускается Node.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  plugins: [
    new MiniCssExtractPlugin(), 
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
