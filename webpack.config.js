const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');

const webpack = require('webpack');

// const bootstrapConfig = "bootstrapEntryPoints";

module.exports = {
    entry: {
        app: './src/js/index.js',
        bootstrap: './webpack.bootstrap.config.js',
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
        new ExtractTextPlugin("app.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            Popper: ['popper.js', 'default'],
            Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            Button: "exports-loader?Button!bootstrap/js/dist/button",
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: "exports-loader?Util!bootstrap/js/dist/util",
          })
      ]
}
