const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

// Remove todos os arquivos previamente existes do diretorio de saida
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
  },
  plugins: [new CleanWebpackPlugin()],
});
