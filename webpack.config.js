/**
 * Created by Administrator on 2018/12/18.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemoveDebug = require('./wp-plugin/remove-DEBUG.js');

module.exports = {
    mode: "production",
    entry: "./entry.js",//已多次提及的唯一入口文件
    output: {
        path: path.resolve(__dirname,"public"),//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    plugins: [
        new RemoveDebug({name: 'debug remove'}),
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};

