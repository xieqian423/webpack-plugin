/**
 * Created by Administrator on 2018/12/18.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const RemoveDebug = require('./wp-plugin/remove-DEBUG.js');

require("babel-polyfill");

module.exports = {
    mode: "development",
    // entry: ["babel-polyfill", "./entry.js"],//已多次提及的唯一入口文件
    entry: "./entry.js",
    output: {
        path: path.resolve(__dirname,"public"),//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        hot: true                // 热更新
    },
    plugins: [
        new RemoveDebug({name: 'debug remove'}),
        new CleanWebpackPlugin(['public']),  // 删除public目录
        new HtmlWebpackPlugin({template: './index.html', title: 'output test management'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
           { 
               // 起作用
                test: /\.js$/, 
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: require("./babel-plugin/babel-test")
                    }
                }]
            }
        ]
        // rules: [
        //     {
        //         test: /\.(js|jsx)$/,
        //         use: 'babel-loader'
        //     }
        // ]
    }
};

