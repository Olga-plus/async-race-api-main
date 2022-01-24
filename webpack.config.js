const WriteFilePlugin = require("write-file-webpack-plugin");
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


const baseConfig = {
  entry: path.resolve(__dirname, './public/app.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', "sass-loader",],
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new WriteFilePlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public/assets', to: path.resolve(__dirname, './dist/assets') },
      ],
    }),
  ],

  stats: {
    children: true,
  },
};

module.exports = ({ mode }) => {

  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config.js');
  
  return merge(baseConfig, envConfig);
};