const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {NODE_ENV} = process.env;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = !IS_DEV;

module.exports = {
  mode: NODE_ENV,
  entry: './src/index.jsx',
  output: {
    filename: IS_PROD ? '[name].[contenthash:10].js' : '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: IS_DEV ? 'inline-source-map' : 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/, // <-- added `|jsx` here
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                ...(IS_DEV && {localIdentName: '[name]__[local]'}),
                ...(IS_PROD && {localIdentName: '[hash:base64]'}),
              },
            },
          },
        ],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ['*', '.js', '.jsx'], // <-- added `.jsx` here
  },
  plugins: [new HtmlWebpackPlugin({template: path.join(__dirname, 'public', 'index.html')}), new Dotenv()],
};
