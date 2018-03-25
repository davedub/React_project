const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProd = process.env.NODE_ENV === 'production' // true or false

const cssDev = ['style-loader', 'css-loader', 'sass-loader'];    

const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev; 

const extractProd = new ExtractTextPlugin('[name].css');
const cssProd = extractProd.extract({
    fallback: 'style-loader',
    use: [ 'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]' , 'sass-loader' ],
    publicPath: '/dist'
    });


module.exports = {
    entry: {
        app: './src/js/index.js',
        bootstrap: bootstrapConfig,
        contact: './src/js/contact.js'
},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
            test: /bootstrap\/dist\/js\/umd\//, 
            use: 'imports-loader?jQuery=jquery'
            },
            {
            test: /\.scss$/,
            // use: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader'])
            use: isProd ? cssProd : cssDev
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
        compress: false,
        hot: true,
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
          }),
        new webpack.NamedModulesPlugin(),
          // prints more readable module names in the browser console on HMR update
        new webpack.HotModuleReplacementPlugin()
          // enable HMR globally
      ]
}
