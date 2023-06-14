const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vanilla JS Demo',
      template: path.resolve(__dirname, './src/template.html'), // template file
      favicon: './src/assets/favicon.ico',
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};
