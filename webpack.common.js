// Cria o arquivo HTML para servir ao bundle
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Remove todos os comentarios do bundle e previne a criacao do arquivo licence.txt
const TerserPlugin = require('terser-webpack-plugin');

// Plugin para otimizar imagens
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.js',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              severityError: 'warning', // Ignora erros para imagens corrompidas
              minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                  plugins: ['imagemin-mozjpeg', 'imagemin-pngquant'],
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Images': path.resolve(__dirname, 'src/assets/images/'),
      '@Fonts': path.resolve(__dirname, 'src/assets/fonts/'),
      '@Styles': path.resolve(__dirname, 'src/assets/styles'),
      '@Utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};
