const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const urlMap = require('./url-mapper.config');

module.exports = {
  context: path.resolve(__dirname, '../src/js'),
  entry: {
    login: './Login.jsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist/js'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new InterpolateHtmlPlugin(urlMap),
    new webpack.DefinePlugin({
      'process.env.API_HOST': JSON.stringify('https://dev.prompt.co.kr/api'),
    }),
    new HtmlWebpackPlugin({
      title: '로그인',
      filename: '../login.html',
      template: '../tpl/login.html',
      chunks: ['login'],
    }),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
