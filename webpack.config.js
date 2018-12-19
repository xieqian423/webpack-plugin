/**
 * Created by Administrator on 2018/12/18.
 */

var webpack = require('webpack');
var RemoveDebug = require('./webpack-plugin/remove-DEBUG.js');
module.exports = {
    entry: "./entry.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    plugins: [
        new RemoveDebug({name: 'debug remove'})
    ]
};

