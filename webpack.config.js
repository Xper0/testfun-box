const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require('webpack')
const transformAsync = require('@babel/plugin-transform-async-to-generator')
const babelify = require("babelify");
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, "/dis"),
        filename: "[name].[chunkhash].js",

    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],

            },
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(jpg|svg|png)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img",
                        publicPath: "img"
                    }
                }]
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'file-loader?name=./src/content/font/[name].[ext]'
                    },
                ]
            }

        ]
    },
    /*
    devServer: {
        contentBase: "./dis",
        open: true,
        port: 3000
    },*/
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new miniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {from: './src/content/img/*'},
               ]
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),





    ]
};
