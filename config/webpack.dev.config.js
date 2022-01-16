const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const { BUILD_PATH, PROJECT_PATH } = require("./constants");

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: BUILD_PATH,
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    hot: false,
    liveReload: true,
  },
  plugins: [
    new ESLintPlugin({
      context: PROJECT_PATH,
      emitError: true,
      emitWarning: true,
      failOnError: true,
      extensions: ['ts', 'tsx'],
      overrideConfigFile: path.join(PROJECT_PATH, '.eslintrc.js'),
    }),
  ],
};
