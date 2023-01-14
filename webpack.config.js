const path = require('path')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const PugPlugin = require('pug-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const pages = require('./pages.config')

module.exports = (_, argv) => {
  return {
    entry: {
      ...pages,
    },
    devtool: argv.mode === 'development' ? 'source-map' : false,
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.[contenthash].js',
      assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
      publicPath: '/',
    },
    plugins: [
      new PugPlugin({
        pretty: argv.mode === 'development' ? true : false, // включить форматирование HTML
      }),

      new FileManagerPlugin({
        events: {
          onStart: {
            delete: ['dist'],
          },
          onEnd: {
            copy: [
              {
                source: path.join('src', 'static'),
                destination: 'dist',
              },
            ],
          },
        },
      }),
    ],
    devServer: {
      watchFiles: path.join(__dirname, 'src'),
      port: 3000,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /.pug$/,
          loader: PugPlugin.loader,
        },
        {
          test: /\.(scss|css)$/,
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: path.join('icons', '[name].[contenthash][ext]'),
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: path.join('fonts', '[name].[contenthash][ext]'),
          },
        },
      ],
    },
    optimization: {
      minimizer: [
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                ['svgo', { name: 'preset-default' }],
              ],
            },
          },
        }),
      ],
    },
  }
}
