process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const common = require('./webpack.common.js')
const utils = require('./utils')
const config = require('../config')

module.exports = merge(common, {
  entry: {
    index: utils.resolve('src/dev/index.js')
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    publicPath: config.dev.assetsPublicPath,
    hot: true,
    open: true,
    port: config.dev.port,
    proxy: config.dev.proxyTable
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('src/dev/index.html'),
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})
