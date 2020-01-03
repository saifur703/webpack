const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
require('babel-register');

module.exports = {
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new htmlWebPackPlugin({
      template: './index.html'
    }),
    new miniCssExtractPlugin({
      template: './dist/style.css'
    })
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    contentBase: './dist'
  }
};
