const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build')
};

/**
 * Plugin to combine all styling for an entrypoint into
 * a single stylesheet.
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Plugin to take the template html and move it into
 * the build folder and add imports of external assets automatically
 */
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
});

const config = {
  entry: path.join(PATHS.src, 'index.js'),
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(?:png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  output: {
    path: PATHS.build
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    HtmlWebpackPluginConfig
  ]
};

module.exports = config;
