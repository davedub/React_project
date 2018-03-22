const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        app: './src/js/app.js',
        contact: './src/js/contact.js'
},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader'])
            },
            {
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: 'babel-loader'
            }
            ]
        },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'React 101 Tutorial',
          hash: true, // creates a hash for every generated file
          template: './src/index.html', // Load a custom template (lodash by default see the FAQ for details)
        }),
        new ExtractTextPlugin("app.css")
      ]
}
