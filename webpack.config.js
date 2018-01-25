const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const formatter = require('eslint-friendly-formatter');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  entry: {
    giphy: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'Giphy',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter,
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            compact: false,
          },
        },
      },
    ],
  },

  plugins: [
    new FriendlyErrorsPlugin(),
  ],

  devtool: 'source-map', // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  // is resolved relative to this directory

  target: 'web', // enum
  // changes chunk loading behavior and available modules

  stats: 'errors-only',

  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
    open: true,
  },
};
