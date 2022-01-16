const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { PUBLIC_PATH } = require("./constants");

module.exports = {
  mode: 'production',
  devtool: 'nosources-source-map',
  optimization: {
    minimize: true,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
          compress: {
            drop_console: true
          }
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*'],
    }),
    new CopyWebpackPlugin({
      patterns: [{from: PUBLIC_PATH, globOptions: {ignore: ['**/index.html']}}],
    }),
  ],
};
