
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { resolve } = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

/** @type import('webpack').Configuration */
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'index_bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: './dist',
  },
  plugins: [
    new HotModuleReplacementPlugin({

    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../index.html')
    }),
    new ReactRefreshWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              'react-refresh/babel'
            ],
            presets: [
              [
                '@babel/preset-env',
                {
                  "targets": ["last 2 versions"]
                }
              ],
              '@babel/preset-react',
            ]
          }
        }
      }
    ]
  }
}