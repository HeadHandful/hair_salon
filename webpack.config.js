const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: {
      app: {
        name: 'google-chrome',
      },
    },
  },
  // ...,
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/, // <-- added `|jsx` here
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ['*', '.js', '.jsx'], // <-- added `.jsx` here
  },
  plugins: [new HtmlWebpackPlugin({template: './public/index.html'})],
};
