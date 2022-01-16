const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const {PROJECT_PATH, BUILD_PATH, PUBLIC_PATH} = require('./constants');
const productionConfig = require('./webpack.prod.config');
const developmentConfig = require('./webpack.dev.config');

const commonConfig = {
  context: PROJECT_PATH,
  target: 'web',
  entry: {
    index: path.join(PROJECT_PATH, 'src/index.tsx'),
  },
  output: {
    publicPath: '/',
    path: BUILD_PATH,
    filename: 'static/js/[name].[chunkhash].bundle.js',
    chunkFilename: 'static/js/[name].[chunkhash].bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[chunkhash].style.css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_PATH, 'index.html'),
    }),
  ],
};

module.exports = () => {
  switch(process.env.NODE_ENV) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}
