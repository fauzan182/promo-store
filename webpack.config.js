const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/application.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "application.js"
  },
  module: {
    rules:  [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'app'),
        loader: "babel-loader",
        exclude: /node_modules/
      },{
        test: /\.html$/,
        loader: "raw-loader"
      },{
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: "file-loader",
        query: {
          name: "[hash].[ext]",
          outputPath: "./dist/"
        }
      },{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/application.html',
      inject: "body"
    }),
    new ExtractTextPlugin('application.css')
  ],
  resolve: {
    alias: {
      "bootstrap-sass$": "bootstrap-sass/assets/stylesheets/bootstrap"
    }
  }
}
