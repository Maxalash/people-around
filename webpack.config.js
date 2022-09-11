var path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


var config = {
  mode: 'development',
  entry: ["@babel/polyfill", "./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, 'dist', 'app'),
    filename: 'bundle.js'
  },
  devServer:{
    port: 3000
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|jpeg|png|svg)/,
        use: ["file-loader"]
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "@babel/preset-react", '@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin()
  ]
};

module.exports = config;