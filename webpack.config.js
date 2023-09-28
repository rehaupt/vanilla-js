const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { json } = require("react-router-dom");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      { test: /\.json$/, type: "json" },
    ],
  },

  resolve: {
    extensions: ["*", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Vanilla JS-REACT Test",
      template: path.resolve(__dirname, "./template.html"), // template file
      favicon: "./src/assets/favicon.ico",
      filename: "index.html", // output file
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    static: "./src",
    historyApiFallback: true,
  },
};
